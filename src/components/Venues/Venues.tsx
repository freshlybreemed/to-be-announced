import * as React from 'react';
import { useMediaQuery } from 'react-responsive';
import classnames from 'classnames';
import { useEffect, useState } from 'react';

function useMounted() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
}
export const Venues: React.FunctionComponent = () => {
  const isMounted = useMounted();

  const isL = useMediaQuery({ query: '(min-width: 60em)' });
  const isM = useMediaQuery({
    query: '(max-width: 60em) and (min-width: 30em)',
  });
  return (
    <div className={'relative'}>
      <div className="ph4 ttu fw5 f2">Howard Theatre</div>
      <img
        src="https://dice-media.imgix.net/attachments/2020-01-15/4bed9553-1604-4ebf-976d-5dfd03f12666.jpg?rect=0%2C81%2C2048%2C1118"
        className="w-90 relative"
        style={{ bottom: '-20px' }}
      />
      <div className={'w-100 ph4 pt4 bg-white black'}>
        <div className="pb4">
          <h3 className="mw8 ttu fw4">Information</h3>
          <div className="fw6 f5 pv1">Capacity</div>
          <div className="fw7 f4">200</div>
        </div>
        <div className="pb4">
          <div className="fw6 f5 pv1">Contact details</div>
          <div className="fw7 f4">freshlybreemed@gmail.com</div>
        </div>
        <div className="pb4">
          <div className="fw6 f5 pv1">Address</div>
          <div className="fw7 f4">202 T St. NW, DC 20002</div>
        </div>
        <div className="pb4">
          <div className="fw6 f5 pv1">Social Links</div>
          <div className="fw7 f4">Facebook</div>
          <div className="fw7 f4">Instagram</div>
        </div>
      </div>

      <div className={'w-100 ph4  pt4 bg-black white'}>
        <div className="pb4">
          <h3 className="mw8 ttu fw4">Photo Gallery</h3>

          <img
            src="https://dice-media.imgix.net/attachments/2020-01-15/b7a5dd28-2559-4af6-a0c4-35fcc4a13a03.jpg"
            className="w-60"
          />
        </div>
      </div>
      <div className={'w-100 ph4  pt4 bg-white black'}>
        <div className="pb4">
          <h3 className="mw8 ttu fw4">Upcoming Events</h3>
          {isMounted && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: `${classnames({
                  'repeat(3, 1fr)': isL,
                  'repeat(2, 1fr)': isM,
                })}`,
                gridColumnGap: classnames({
                  '32px': isL,
                  '16px': isM,
                  '8px': !isL && !isM,
                }),
                gridRowGap: classnames({
                  '64px': isL,
                  '32px': isM,
                  '16px': !isL && !isM,
                }),
                boxSizing: 'inherit',
              }}
            >
              <div className="w-100 ">
                <div
                  className="w-100 h-100 relative flex"
                  style={{ boxSizing: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://dice-media.imgix.net/attachments/2020-02-26/4b1afb5b-a4dd-485b-ba5b-faa3eb5381c9.jpg?rect=241%2C225%2C1413%2C1413?auto=compress&lossless=true&auto=format&h=250&w=250&dpr=2")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      top: '0px',
                      left: '0px',
                      width: '350px',
                      height: '250px',
                    }}
                    className="o-100  "
                  ></div>
                </div>

                <h4 className="f5 fw4 mb0">{`Thu 9 Jul — 20:00`}</h4>
                <a href="" className="black no-underline">
                  <h4 className="f4 fw8 mt2 mb0 ttu">{`Party & Bullshit`}</h4>
                </a>
                <h4 className="f5 fw6 mt1 pt1 ">{`Howard Theatre`}</h4>
                <a className=" bg-black white br-100 pa2 tc f4-ns f6 fw6-ns fw5 grow noselect no-underline ph4">
                  Get Tickets
                </a>
              </div>
              <div className="w-100 ">
                <div
                  className="w-100 h-100 relative flex"
                  style={{ boxSizing: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://dice-media.imgix.net/attachments/2020-02-05/6ad52558-ee29-4574-93ba-de5cbdbc6b59.jpg")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      top: '0px',
                      left: '0px',
                      width: '350px',
                      height: '250px',
                    }}
                    className="o-100  "
                  ></div>
                </div>
                <h4 className="f5 fw4 mb0">{`Fri 10 Jul — 20:00`}</h4>
                <a href="" className="black no-underline">
                  <h4 className="f4 fw8 mt2 mb0 ttu">{`Kill Moe`}</h4>
                </a>
                <h4 className="f5 fw6 mt1 pt1 ">{`Howard Theatre`}</h4>
                <a className="bg-black white br-100 pa2 tc f4-ns f6 fw6-ns fw5 grow noselect ph4 no-underline">
                  Get Tickets
                </a>
              </div>
              <div className="w-100 ">
                <div
                  className="w-100 h-100 relative flex"
                  style={{ boxSizing: 'inherit' }}
                >
                  <div
                    style={{
                      backgroundImage:
                        'url("https://dice-media.imgix.net/attachments/2020-03-10/aab83992-8fe3-4954-8eef-b720e286544e.jpg?rect=160%2C0%2C640%2C640?auto=compress&lossless=true&auto=format&h=250&w=250&dpr=2")',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center center',
                      top: '0px',
                      left: '0px',
                      width: '350px',
                      height: '250px',
                    }}
                    className="o-100  "
                  ></div>
                </div>
                <h4 className="f5 fw4 mb0">{`Sun 16 Jul — 10:00`}</h4>
                <a href="" className="black no-underline">
                  <h4 className="f4 fw8 mt2 mb0 ttu">{`Ice Cream Sunday`}</h4>
                </a>
                <h4 className="f5 fw6 mt1 pt1 ">{`Howard Theatre`}</h4>
                <a className="bg-black white br-100 pa2 tc f4-ns f6 fw6-ns fw5 grow noselect ph4 no-underline">
                  Get Tickets
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};