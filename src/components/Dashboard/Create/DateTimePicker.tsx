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
  timeMode: boolean;
  dateMode: boolean;
  timeZoneId: string;
}
export const DateTimePicker: React.FunctionComponent<DateProps> = ({
  setDate,
  date,
  dateMode,
  timeMode,
  timeZoneId,
  isValidDate,
  timeConstraints,
}) => {
  return (
    <Datetime
      timeFormat=" h:mm a"
      //   dateFormat={false}
      input={true}
      displayTimeZone={timeZoneId}
      dateFormat={dateMode}
      timeFormat={timeMode}
      isValidDate={isValidDate}
      closeOnSelect={true}
      inputProps={{
        style: { boxSizing: 'initial' },
        //  placeholder: setTicketEndDate
        //    ? ``
        //    : `${start ? `Start` : `End`} Date`,
        className: 'pl2 pb2 input-reset bn w-90',
      }}
      value={date}
      onBlur={(e: any) => setDate(moment(e).toDate())}
      onChange={(e: any) => setDate(moment(e).toDate())}
      className={`black `}
      timeConstraints={timeConstraints}
    />
  );
};
