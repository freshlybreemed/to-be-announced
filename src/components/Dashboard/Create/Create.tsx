import * as React from "react";
import { useState } from "react";
import { PlacesAutoComplete } from "./PlacesAutoComplete";
export const Create: React.FunctionComponent = () => {
  const [name, setName] = useState<string>("");
  const [location, setLocation] = useState<string>("");
  const setEventLocation = (addy: string) => {
    setLocation(addy);
  };

  console.log(location);

  return (
    <article className="w-100 w-75-m w-75-l ph3-m ph3-l">
      <header className="mb3">
        <h1 className="fw3 dark-gray mt0 mb0">Create Event</h1>
      </header>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Select Event Type</h2>
      <div className="flex items-center  center nl3 nr3 pt4 mb4">
        <div className="w-100 w-40-ns ph3 tc mb4 mb0-l ba pa5 ml3-ns mr5-ns">
          <div className="w-50 w-50-m w-75-l center"></div>
          <h3 className="mt3 mb1 f6 fw5 silver">Venue</h3>
          <h4 className="dark-gray f3 fw3 mv0">Physical Location</h4>
        </div>
        <div className="w-100 w-40-ns ph3 tc mb4 mb0-l ba pa5">
          <div className="w-50 w-50-m w-75-l center"></div>
          <h3 className="mt3 mb1 f6 fw5 silver">Virtual Event</h3>
          <h4 className="dark-gray f3 fw3 mv0">Live Streaming</h4>
        </div>
      </div>
      <hr className="o-20 mt4" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Event Details</h2>
      <div className="mv3">
        <input
          value={name}
          onChange={(event) => {
            setName(event.currentTarget.value);
          }}
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50 mr3"
          placeholder="Event Name"
        />
      </div>
      <div className="mv3">
        <PlacesAutoComplete setLocation={setEventLocation} />
      </div>
      <div className="mv3">
        <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50 mr3"
          placeholder="Start Date"
        />
      </div>
      <div className="mv3">
        <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50 mr3"
          placeholder="End Date"
        />
      </div>
    </article>
  );
};
