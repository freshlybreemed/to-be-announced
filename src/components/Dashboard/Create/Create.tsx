import * as React from 'react';
import { useState } from 'react';
import Cleave from 'cleave.js/react';
import Datetime from 'react-datetime';
import axios from 'axios';
import { PlacesAutoComplete } from './PlacesAutoComplete';
import { TicketCreationForm } from './TicketCreationForm';
import { UploadFlyer } from './UploadFlyer';

// interface TicketProps {
//   name: string;
//   quantity: number;
//   price: number;
//   description: string;
//   enabled: boolean;
// }
export const Create: React.FunctionComponent = () => {
  const [name, setName] = useState<string>('');
  const [location, setLocation] = useState<string>('');
  const [image, setImage] = useState<string>('');
  const [startDate, setStartDate] = useState<string>('');
  const [startTime, setStartTime] = useState<string>('');
  const [renderStartTimes, setRenderStartTimes] = useState<boolean>(false);
  const [eventType, setEventType] = useState<string>('');

  class MyDTPicker extends React.Component {
    render() {
      return (
        <Datetime
          // renderInput={this.renderInput}
          value={startDate}
          onBlur={(e) => setStartDate(e.toString())}
          className="black"
          timeConstraints={{ minutes: { step: 40, min: 0, max: 24 } }}
        />
      );
    }
    renderInput(props, openCalendar, closeCalendar) {
      function clear() {
        props.onChange({ target: { value: '' } });
      }
      return (
        <div>
          <input
            {...props}
            className="pa2 bt-0 br-0 bl-0 input-reset bb  black mr3  w-50-ns w-100"
          />
          <button onClick={openCalendar}>open calendar</button>
          <button onClick={closeCalendar}>close calendar</button>
          <button onClick={clear}>clear</button>
        </div>
      );
    }
  }
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
        '4:00 AM',
        '5:00 AM',
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
    startDate,
    startTime,
  });
  const handleSubmit = async () => {
    const eventInfo = {
      name,
      location,
      eventType,
      image,
      startDate: new Date(startDate),
      startTime,
    };
    await axios.post('/api/event', eventInfo);
  };
  return (
    <article className="w-100 w-75-m w-75-l ph3-m ph3-l">
      <h1 className="f1-ns f2 mt0">Create Event</h1>
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Select Event Type</h2>
      <div className="flex items-center  center nl3 nr3 pt4 mb4">
        {(eventType === '' || eventType === 'venue') && (
          <div
            className=" b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph4 f5 fw5 mr3 white"
            onClick={() => setEventType('venue')}
          >
            Venue
          </div>
        )}
        {(eventType === '' || eventType === 'online') && (
          <div
            className=" b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph4 f5 fw5 white"
            onClick={() => setEventType('online')}
          >
            Online Event
          </div>
        )}
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
          options={{
            date: true,
            delimiter: '-',
            datePattern: ['m', 'd', 'Y'],
          }}
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
      <MyDTPicker />
      <div className="mv3">
        <input
          className="pa2 bt-0 br-0 bl-0 input-reset bb bg-black white mr3 mb3 w-50-ns w-100"
          placeholder="End Date"
        />
      </div>
      <UploadFlyer setImage={setImage} />
      <hr className="o-20" />
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Enter Ticket Details</h2>
      <TicketCreationForm />
      <div
        className="mt4 b--white hover-bg-white hover-black dib noselect br-100 b--solid pa2 ph4 f3 fw5"
        onClick={() => handleSubmit()}
      >
        Submit
      </div>
    </article>
  );
};
