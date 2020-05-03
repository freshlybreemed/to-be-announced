import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import DateTime from 'react-datetime';

import { PlacesAutoComplete } from './PlacesAutoComplete';
import { UploadFlyer } from './UploadFlyer';
export const Create: React.FunctionComponent = () => {
  const today = new Date().toISOString().slice(0, 10).split('-');
  const todaysDate = `${today[1]}${today[2]}${today[0]}`;
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [startDate, setStartDate] = useState<string>(todaysDate);
  const [startTime, setStartTime] = useState<string>('');
  const [renderStartTimes, setRenderStartTimes] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>('');

  const renderTime = () => (
    <ul
      onClick={() => setRenderStartTimes(!renderStartTimes)}
      className="pl0 list "
    >
      {[
        '12:00 AM',
        '12:30 AM',
        '1:00 AM',
        '1:30 AM',
        '2:00 AM',
        '2:30 AM',
        '3:00 AM',
        '3:30 AM',
        '12:00 AM',
      ].map((curr) => (
        <li onClick={() => setStartTime(curr)} className="dim mv1 noselect">
          {curr}
        </li>
      ))}
    </ul>
  );

  const setEventLocation = (addy: string) => {
    setLocation(addy);
  };

  console.log({
    name,
    location,
    eventType,
    image,
    startDate: new Date(startDate),
    startTime,
  });

  return (
    <article className="w-100 w-75-m w-75-l ph3-m ph3-l">
      <h1 className="f1-ns f2 mt0">Create Event</h1>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Select Event Type</h2>
      <div className="flex items-center  center nl3 nr3 pt4 mb4">
        <div
          className="tc mb4 mb0-l ba pa3 ml3-ns mr4-ns mr2 hover-bg-white hover-black"
          onClick={() => setEventType('venue')}
        >
          <label className="mt3 mb1 f6 fw5 silver">Venue</label>
        </div>
        <div
          className=" tc mb4 mb0-l ba pa3 hover-bg-white hover-black"
          onClick={() => setEventType('online')}
        >
          <label className="mt3 mb1 f6 fw5 silver">Online Event</label>
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
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3  w-50-ns w-100"
          placeholder="Event Name"
        />
      </div>
      <div className="mv3 ">
        <PlacesAutoComplete setLocation={setEventLocation} />
      </div>
      <div className="mv3">
        <Cleave
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3 w-50-ns w-100"
          placeholder="Start Date"
          options={{ date: true, delimiter: '-', datePattern: ['m', 'd', 'Y'] }}
          value={startDate}
          onChange={(e) => setStartDate(e.currentTarget.value)}
        />
      </div>
      <div className="mv3">
        {/* <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50 mr3"
          placeholder="Start Time"
        /> */}

        <div className=" pa2 bt-0 br-0 bl-0 input-reset bb bg-black white w-50-ns w-100 ">
          <div
            className=""
            onClick={() => setRenderStartTimes(!renderStartTimes)}
          >
            {startTime.length > 0 ? startTime : 'Start Time'}
          </div>
          {renderStartTimes && renderTime()}
          {/* </div> */}
        </div>
      </div>
      <DateTime
        className="black"
        timeConstraints={{ minutes: { step: 40, min: 0, max: 24 } }}
      />
      <div className="mv3">
        <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3 mb3 w-50-ns w-100"
          placeholder="End Date"
        />
      </div>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Ticket Details</h2>
      <UploadFlyer setImage={setImage} />
    </article>
  );
};
