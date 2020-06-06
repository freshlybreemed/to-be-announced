import * as React from 'react';

export const Payouts: React.FunctionComponent = () => (
  <article className="w-100 w-75-m w-75-l ph3-m ph3-l">
    <header className="mb3">
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Payouts</h2>
      <h1 className="f1-ns f2 mv0">Welcome, Ebrima</h1>
    </header>
    <hr className="o-20" />
    <div className="flex flex-wrap items-center justify-between pt1 mb4">
      <div className="flex flex-wrap  w-100 nr3 mb4">
        <article className="mw8 bg-black-80 br3 w-100 w-48-ns mr1-ns pa3   mv1  bg-green">
          <div className="cf f4-l fw6 f5-m f6 ">
            <div className="fl w-60  tl  ">
              <span className="">Net Sales </span>
            </div>
            <div className="fl w-40 tr">
              <span className=" ">$1273.50</span>
            </div>
          </div>
        </article>
        <article className="mw8 bg-black-80 br3 w-48-ns w-100 pa3 ml1-ns mv1 bg-purple">
          <div className="cf f4-l fw6 f5-m f6 ">
            <div className="fl w-60  tl ">
              <span className="">Tickets Sold</span>
            </div>
            <div className="fl w-40  tr ">
              <span className="">1073</span>
            </div>
          </div>
        </article>
        <article className="mw8 bg-black-80 br3  w-48-ns w-100 mr1-ns pa3  mv1 bg-orange">
          <div className="cf v-mid f4-l fw6 f5-m f6 ">
            <div className="fl w-50 tl ">
              <span className="">Current Balance</span>
            </div>
            <div className="fl w-50   tr ">
              <span className="">$34.88</span>
            </div>
          </div>
        </article>
        <article className="mw8 bg-black-80 br3 w-48-ns w-100 pa3 ml1-ns mv1 bg-blue">
          <div className="cf v-mid f4-l fw6 f5-m f6 ">
            <div className="fl w-60 tl ">
              <span className="">Total Events</span>
            </div>
            <div className="fl w-40   tr ">
              <span className="">3</span>
            </div>
          </div>
        </article>
      </div>
    </div>
  </article>
);
