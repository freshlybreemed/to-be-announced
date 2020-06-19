import React, { useState } from 'react';
import classnames from 'classnames';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import { EventProps } from '../../../@types/types';
interface EventLocationProps {
  setLocation: any;
  location: any;
  event: EventProps;
}

export const PlacesAutoComplete: React.FunctionComponent<EventLocationProps> = ({
  setLocation,
  location,
  event,
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
  };

  const handleSelect = ({ description, structured_formatting }) => () => {
    const venue = structured_formatting.main_text;
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    setVenue(description);
    clearSuggestions();
    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => {
        console.log(results[0]);
        const address = `${
          results[0].address_components.filter((curr) =>
            curr.types.includes('street_number')
          )[0].short_name
        } ${
          results[0].address_components.filter((curr) =>
            curr.types.includes('route')
          )[0].short_name
        }`;
        const city = results[0].address_components.filter((curr) =>
          curr.types.includes('locality')
        )[0].short_name;
        const state = results[0].address_components.filter((curr) =>
          curr.types.includes('administrative_area_level_1')
        )[0].short_name;
        const zip = results[0].address_components.filter((curr) =>
          curr.types.includes('postal_code')
        )[0].short_name;

        const location = {
          venue,
          address,
          city,
          state,
          zip,
          placeId: results[0].place_id,
        };
        setLocation(location);
        return getLatLng(results[0]);
      })
      .then(({ lat, lng }) => {
        console.log('📍 Coordinates: ', { lat, lng });
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
        disabled={!ready || event ? true : false}
        className={`pa2 bt-0 br-0 bl-0 input-reset bb bg-black w-100 ${classnames(
          { gray: location.venue, white: !location.venue }
        )}`}
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="list pl0">{renderSuggestions()}</ul>}
    </div>
  );
};
