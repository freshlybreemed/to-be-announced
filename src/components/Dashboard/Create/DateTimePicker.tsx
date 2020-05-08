import Datetime from 'react-datetime';
import React from 'react';

interface DateProps {
  startDate: any;
  setStartDate: any;
}
export const DateTimePicker: React.FunctionComponent<DateProps> = ({
  startDate,
  setStartDate,
}) => {
  return (
    <Datetime
      timeFormat=" h:mm a"
      //   dateFormat={false}
      input={true}
      inputProps={{
        style: { boxSizing: 'initial' },
        placeholder: 'Start Date',
        className:
          'pa2 bt-0 br-0 bl-0 input-reset bb  black bg-black white  w-75-ns w-100',
      }}
      value={startDate}
      onBlur={(e) => setStartDate(e.toString())}
      className="black"
      timeConstraints={{ minutes: { step: 40, min: 0, max: 24 } }}
    />
  );
};
