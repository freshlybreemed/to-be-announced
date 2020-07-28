import React, { useState } from 'react';
import dynamic from 'next/dynamic';
import { EventProps, OrderProps } from '../../../@types/types';
import moment from 'moment';
import classnames from 'classnames';
import { formatEventDateTime } from '../../../lib';
const importQR = () => import('react-qr-reader');

const QrReader = dynamic(importQR, {
  ssr: false,
});
interface Props {
  event: EventProps;
  orders: OrderProps[];
}

export const ScanTicket: React.FunctionComponent<Props> = ({
  event,
  orders,
}) => {
  const [result, setResult] = useState<string>('');
  const [tickets] = useState<any>(
    orders.reduce((acc, curr) => {
      return acc.concat(curr.tickets);
    }, [])
  );
  const [live] = useState<boolean>(new Date(event.startDate) > new Date());
  const [facing, setFacing] = useState<boolean>(true);
  const [inProgress] = useState<boolean>(
    moment().isBetween(event.startDate, event.endDate)
  );
  console.log(tickets);
  const handleScan = (data) => {
    if (data) {
      setResult(data);
      console.log(tickets.filter((curr) => curr.barCode === data));
    }
  };
  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <main className="mw9 ml4-ns ph3-l center">
        <article className="dt tc tl-ns w-90-l w-100-m  pb2 mv2">
          <div className="dtc-l dtc-m  pt2-m pb2 v-mid  fw7">
            <div className="mb3">
              <span className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2">
                Scan Tickets
              </span>
            </div>
            <div className=" lh-title f3 mb0 mt0-ns underline-hover">
              <a className="white no-underline">{event.name}</a>
            </div>
            <div className="f4-ns f5 fw6 lh-title mv0 underline-hover">
              <a
                className="white no-underline"
                target="_blank"
                href={`https://www.google.com/maps/place/?q=place_id:${event.location.placeId}`}
              >
                {event.location.venue}
              </a>
            </div>
            <div>
              <span className="f4-ns f5 fw6 mv0 gray">
                {`${formatEventDateTime(
                  new Date(event.startDate),
                  new Date(event.endDate),
                  event.location.timeZoneId
                )}`}
              </span>
            </div>
            <h2
              className={`f4-ns f5 fw6 mv0 ${classnames({
                green: live && !inProgress,
                red: !live,
                yellow: inProgress,
              })}`}
            >
              • {inProgress ? `In Progress` : live ? `Live` : `Sale Ended`}
            </h2>
          </div>
          <div className="w-auto-m dtc" />
        </article>
      </main>
      <div className="w-70-ns w-90 center">
        <div className="mb3"></div>
        <QrReader
          delay={300}
          resolution={790}
          facingMode={facing ? 'user' : 'environment'}
          onError={handleError}
          onScan={handleScan}
          style={{ width: '100%' }}
        />
        <span
          onClick={() => setFacing(!facing)}
          className="f3-l f4 fw6-l fw4 br-100 b--solid pv2 ph3 mv2"
        >
          Flip Camera
        </span>
      </div>
      <p>{result}</p>
    </div>
  );
};
