import * as React from 'react';

export const SideBar: React.FunctionComponent = () => (
  <nav className="w-100 w-25-m w-25-l mb4 mb0-l ph3-m ph3-l bg-black">
    <h2 className="ttu mt0 mb2 f5 fw5 white">Manage</h2>
    <ul className="list pl0 mt0 mb4 f4">
      <li className="mb2">
        <a href="/dashboard/create" className="block link dim gray">
          Create An Event
        </a>
      </li>
      <li className="mb2">
        <a href="/dashboard/myevents" className="block link dim gray">
          Events
        </a>
      </li>
      <li className="mb2">
        <a href="#" className="block link dim gray">
          Payouts
        </a>
      </li>
    </ul>
    <h2 className="ttu mt0 mb2 f5 fw5 white">More</h2>
    <ul className="list pl0 mt0 f4 mb2">
      <li className="mb2">
        <a href="#" className="block link dim gray">
          Bank Settings
        </a>
      </li>
      <li className="mb2">
        <a href="#" className="block link dim gray">
          Organizer Profile
        </a>
      </li>
      <li className="mb2">
        <a href="#" className="block link dim gray">
          Account Settings
        </a>
      </li>
      <li>
        <a href="#" className="block link dim gray">
          Log out
        </a>
      </li>
    </ul>
  </nav>
);
