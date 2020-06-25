import Datetime from 'react-datetime';
import React from 'react';
import moment from 'moment-timezone';
interface DateProps {
  date?: any;
  setDate?: any;
  setEndDate?: any;
  setStartDate?: any;
  isValidDate?: any;
  ticketEndDate?: any;
  timeConstraints?: any;
  start?: boolean;
  className?: string;
  timeZoneId: string;
}
export const DateTimePicker: React.FunctionComponent<DateProps> = ({
  setDate,
  date,
  timeZoneId,
  // start,
  className,
  isValidDate,
  timeConstraints,
}) => {
  return (
    <Datetime
      timeFormat=" h:mm a"
      //   dateFormat={false}
      input={true}
      displayTimeZone={timeZoneId}
      isValidDate={isValidDate}
      closeOnSelect={true}
      inputProps={{
        style: { boxSizing: 'initial' },
        //  placeholder: setTicketEndDate
        //    ? ``
        //    : `${start ? `Start` : `End`} Date`,
        className:
          'pa2 bt-0 br-0 bl-0 input-reset bb gray bg-black white w-100',
      }}
      value={date}
      onBlur={(e: any) => setDate(moment(e).toDate())}
      onChange={(e: any) => setDate(moment(e).toDate())}
      className={`black ${className}`}
      timeConstraints={timeConstraints}
    />
  );
};
