import React, { useRef } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
interface EventLocationProps {
  setLocation: any;
}

export const PlacesAutoComplete: React.FunctionComponent<EventLocationProps> = ({
  setLocation,
}) => {
  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions,
  } = usePlacesAutocomplete({
    requestOptions: {
      /* Define search scope here */
    },
    debounce: 300,
  });
  const ref = useRef(null);
  useOnclickOutside(ref, () => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const handleInput = (e) => {
    // Update the keyword of the input element
    setValue(e.target.value);
    setLocation('');
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => {
        console.log(results);
        setLocation(results[0].formatted_address);
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
        value={value}
        onChange={handleInput}
        disabled={!ready}
        placeholder="Event Location"
        className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50-ns w-100 mr3"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="list pl0">{renderSuggestions()}</ul>}
    </div>
  );
};
