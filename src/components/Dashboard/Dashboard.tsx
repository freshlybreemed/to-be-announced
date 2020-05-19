import * as React from 'react';

export const Dashboard: React.FunctionComponent = () => (
  <article className="w-100 w-75-m w-75-l ph3-m ph3-l">
    <header className="mb3">
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Dashboard</h2>
      <h1 className="f1-ns f2 mv0">Welcome, Ebrima</h1>
    </header>
    <hr className="o-20" />
    <div className="flex flex-wrap items-center justify-between pt4 mb4">
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

      <div className="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
        <div className="w-50 w-50-m w-75-l center"></div>
        <h3 className="mt3 mb1 f6 fw5 silver">Traffic</h3>
        <h4 className="dark-gray f3 fw3 mv0">New vs. Returning</h4>
      </div>
      <div className="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
        <div className="w-50 w-50-m w-75-l center"></div>
        <h3 className="mt3 mb1 f6 fw5 silver">Revenue</h3>
        <h4 className="dark-gray f3 fw3 mv0">New vs. Recurring</h4>
      </div>
      <div className="w-100 w-50-m w-33-l ph3 tc mb4 mb0-l">
        <div className="w-50 w-50-m w-75-l center"></div>
        <h3 className="mt3 mb1 f6 fw5 silver">Traffic</h3>
        <h4 className="dark-gray f3 fw3 mv0">Direct vs. Referral</h4>
      </div>
    </div>
    <div className="divide tc relative">
      <h5 className="fw4 ttu mv0 dib bg-white ph3">Quick Stats</h5>
      <div className="pa5 bg-black-90 w-100 vh-100">
        <div className="bg-moon-gray br-pill h1 overflow-y-hidden mb4">
          <div className="bg-green br-pill h1 shadow-1 w-75 progress-bar"></div>
        </div>
        <div className="mb4 bg-moon-gray br-pill h1 overflow-y-hidden">
          <div className="bg-blue progress-bar br-pill h1 shadow-1 w-50"></div>
        </div>
        <div className="bg-moon-gray br-pill h1 overflow-y-hidden">
          <div className="bg-gray br-pill h1 shadow-1 w-third"></div>
        </div>
      </div>
    </div>
    <div className="flex flex-wrap mt3 nl3 nr3">
      <div className="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3"></div>
      <div className="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3"></div>
      <div className="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3"></div>
      <div className="w-50 w-25-l mb4 mb0-l relative flex flex-column ph3"></div>
    </div>
    <hr className="o-20 mt4" />
    <div className="flex flex-wrap pt3 nl3 nr3">
      <div className="w-100 w-50-l ph3 mb3 mb0-l">
        <div className="bt bl br b--black-10 br2">
          <div className="pa3 bb b--black-10">
            <h4 className="mv0">Countries</h4>
          </div>
        </div>
        <a
          href="#"
          className="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white"
        >
          All Countries
        </a>
      </div>
      <div className="w-100 w-50-l ph3 mb3 mb0-l">
        <div className="bt bl br b--black-10 br2">
          <div className="pa3 bb b--black-10">
            <h4 className="mv0">Most Visited Pages</h4>
          </div>
        </div>
        <a
          href="#"
          className="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white"
        >
          All Pages
        </a>
      </div>
    </div>
    <div className="mt4">
      <div className="w-100 mb3 mb0-l">
        <div className="bt bl br b--black-10 br2">
          <div className="pa3 bb b--black-10">
            <h4 className="mv0">Devices and Resolutions</h4>
          </div>
        </div>
        <a
          href="#"
          className="no-underline fw5 mt3 br2 ph3 pv2 dib ba b--blue blue bg-white hover-bg-blue hover-white"
        >
          All Devices
        </a>
      </div>
    </div>
  </article>
);
