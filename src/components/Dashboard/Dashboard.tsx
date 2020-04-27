import * as React from "react";

export const Dashboard: React.FunctionComponent = () => (
  <article className="w-100 w-75-m w-75-l ph3-m ph3-l">
    <header className="mb3">
      <h2 className="ttu mt0 mb1 f6 fw5 silver">Dashboards</h2>
      <h1 className="fw3 dark-gray mt0 mb0">Overview</h1>
    </header>
    <hr className="o-20" />
    <div className="flex-m flex-l flex-wrap items-center justify-between nl3 nr3 pt4 mb4">
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
