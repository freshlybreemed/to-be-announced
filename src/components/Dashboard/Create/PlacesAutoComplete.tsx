import React, { useState } from 'react';
import axios from 'axios';
import usePlacesAutocomplete, { getGeocode } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { EventProps } from '../../../@types/types';
interface EventLocationProps {
  setLocation: any;
  location: any;
  event: EventProps;
  checkForErrors:(item: any) => boolean;

}

export const PlacesAutoComplete: React.FunctionComponent<EventLocationProps> = ({
  setLocation,
  location,
  event,
  checkForErrors
}) => {
  const [venue, setVenue] = useState<string>(location ? location.venue : '');
  const {
    ready,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
    setVenue(e.target.value);
    setLocation('');
    checkForErrors({location: e.target.value})
  };

  const handleSelect = ({ description, structured_formatting }) => async () => {
    const venue = structured_formatting.main_text;
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    setVenue(description);
    clearSuggestions();
    // Get latitude and longitude via utility functions
    await getGeocode({ address: description })
      .then(async (results) => {
        const {
          address_components,
          place_id,
          geometry: {
            location: { lng, lat },
          },
        } = results[0];
        const placeInfo = address_components
          .map((curr) => {
            return { [curr.types[0]]: curr.short_name };
          })
          .reduce((obj, item) => {
            return {
              ...obj,
              [Object.keys(item)[0]]: item[Object.keys(item)[0]],
            };
          }, {});

        const response = await axios.get(
          `https://maps.googleapis.com/maps/api/timezone/json?location=${lat()},${lng()}&timestamp=1458000000&key=${
            process.env.GOOGLE_API_KEY
          }`,
        );
        const {
          data: { timeZoneId },
        } = response;
        const location = {
          venue,
          address: `${placeInfo['street_number'] || ''} ${
            placeInfo['route'] || ''
          }`,
          city: placeInfo['locality'],
          state: placeInfo['administrative_area_level_1'],
          zip: placeInfo['postal_code'] || '',
          lat: lat(),
          lng: lng(),
          placeId: place_id,
          timeZoneId,
        };
        setLocation(location);
      })
      .catch((error) => {
        console.log('😱 Error: ', error);
      });
  };

  const renderSuggestions = () =>
    data.map((suggestion) => {
      const {
        id,
        structured_formatting: { main_text, secondary_text },
      } = suggestion;

      return (
        <li
          className="dim mv1 noselect"
          key={id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={ref}>
      <input
        value={venue}
        onChange={handleInput}
        disabled={!ready || event ? false : false}
        className={`pl2 pb2 input-reset w-90 bn   `}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="list pl2">{renderSuggestions()}</ul>}
    </div>
  );
};
