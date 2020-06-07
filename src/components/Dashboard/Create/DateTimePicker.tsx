import Datetime from 'react-datetime';
import React from 'react';
import moment from 'moment';

interface DateProps {
  date?: any;
  setDate?: any;
  setEndDate?: any;
  setStartDate?: any;
  isValidDate?: any;
  ticketEndDate?: any;
  timeConstraints?: any;
  start?: boolean;
}
export const DateTimePicker: React.FunctionComponent<DateProps> = ({
  setDate,
  date,
  // start,
  className,
  isValidDate,
  timeConstraints,
}) => {
  var yesterday = moment().subtract(1, 'day');
  const validStartDate = (current: any) => current.isAfter(yesterday);
  const validEndDate = (current: any) => current.isAfter(startDate);

  return (
    <Datetime
      timeFormat=" h:mm a"
      //   dateFormat={false}
      input={true}
      isValidDate={isValidDate}
      inputProps={{
        style: { boxSizing: 'initial' },
        //  placeholder: setTicketEndDate
        className:
          'pa2 bt-0 br-0 bl-0 input-reset bb gray bg-black white w-100',
      }}
      value={date}
      onBlur={(e) => setDate(moment(e.toString()))}
      onChange={(e) => setDate(moment(e.toString()))}
      className={`black ${className}`}
      timeConstraints={timeConstraints}
    />
  );
};
