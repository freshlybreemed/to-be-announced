import * as React from "react";
import { useState } from "react";

export const Login: React.FunctionComponent = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className={"pv1"}>
      <h1>TBA fills rooms with fans - Login now to get started</h1>
      <div className="mv5">
        <div className="mv1">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
          </label>
          <input
            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              // setError('');
            }}
          />
          <small id="name-desc" className="hljs-strong f6 red db mb2">
            {/* {error} */}
          </small>
        </div>
        <div className="mv3">
          <label className="db fw6 lh-copy f6" htmlFor="password">
            Password
          </label>
          <input
            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100"
            type="password"
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
          />
        </div>
        <a className="b--white dib dim noselect br-100 b--solid pa2 ph4 f4 fw5">
          Login
        </a>
      </div>
    </div>
  );
};
