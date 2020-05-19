import Datetime from 'react-datetime';
import React from 'react';
import moment from 'moment';

interface DateProps {
  startDate?: any;
  endDate?: any;
  setEndDate?: any;
  setStartDate?: any;
  start: boolean;
}
export const DateTimePicker: React.FunctionComponent<DateProps> = ({
  startDate,
  setStartDate,
  setEndDate,
  endDate,
  start,
}) => {
  var yesterday = moment().subtract(1, 'day');
  const validStartDate = (current: any) => current.isAfter(yesterday);
  const validEndDate = (current: any) => current.isAfter(startDate);

  return (
    <Datetime
      timeFormat=" h:mm a"
      //   dateFormat={false}
      input={true}
      isValidDate={start ? validStartDate : validEndDate}
      inputProps={{
        style: { boxSizing: 'initial' },
        placeholder: `${start ? `Start` : `End`} Date`,
        className:
          'pa2 bt-0 br-0 bl-0 input-reset bb gray bg-black white  w-75-ns w-100',
      }}
      value={start ? startDate : endDate}
      onBlur={(e) =>
        start
          ? setStartDate(moment(e.toString()))
          : setEndDate(moment(e.toString()))
      }
      className="black"
      timeConstraints={{ minutes: { step: 40, min: 0, max: 24 } }}
    />
  );
};
