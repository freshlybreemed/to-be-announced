import Datetime from 'react-datetime';
import React from 'react';
import moment from 'moment-timezone';
interface DateProps {
  date?: any;
  type: string;
  setDate?: any;
  isValidDate?: any;
  timeConstraints?: any;
  timeMode: boolean;
  dateMode: boolean;
  timeZoneId: string;
  checkForErrors:(item: any) => boolean;
}
export const DateTimePicker: React.FunctionComponent<DateProps> = ({
  setDate,
  date,
  dateMode,
  timeMode,
  timeZoneId,
  isValidDate,
  timeConstraints,
  type,
  checkForErrors
}) => {
  return (
    <Datetime
      input={true}
      displayTimeZone={timeZoneId}
      dateFormat={dateMode}
      timeFormat={timeMode}
      isValidDate={isValidDate}
      closeOnSelect={true}
      inputProps={{
        style: { boxSizing: 'initial' },
        className: 'pl2 pb2 input-reset bn w-90',
        readOnly: true,
      }}
      value={date}
      onBlur={(e: any) => setDate(moment(e).toDate())}
      onChange={(e: any) => {
        setDate(moment(e).toDate());
        checkForErrors({[type]: moment(e).toDate()})
      }}
      className={`black `}
      timeConstraints={timeConstraints}
    />
  );
};
