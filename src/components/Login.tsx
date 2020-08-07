import * as React from "react";
import { useState } from "react";
import Firebase from "../lib/firebase";
import { setCookie } from "../lib";
// import axios, { AxiosResponse } from 'axios';
import Router from "next/router";

export const Login: React.FunctionComponent = ({}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const handleLogin = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // setSignInText('Signing In...');
    setLoading(true);
    if (!(email && password)) {
      setError("Please fill in email and password");
      // setSignInText('Sign In');
      // setLoading(false);
      return;
    }

    let isError = false;
    Firebase.login(Firebase.EMAIL, { email, password })
      .catch((result) => {
        setError(result.message);
        setLoading(false);
        isError = true;
      })
      .then((result: { message: any; user: { uid: string } }) => {
        if (isError) {
          return;
        }
        setCookie("id_token", result.user.uid);
        Router.push("/");
        // axios
        //   .post('/api/user', { data: { firebase: result.user } })
        //   .then((res: AxiosResponse) => {
        //     const user = res.data;
        //     if (user.admin) {
        //       setCookie('id_token_a', 'true');
        //     }
        //   });
      });
  };

  return (
    <div className={"pv1"}>
      <h1 className="f1-ns f2 mt0">Welcome to TBA</h1>
      <h2 className="gray">Login now to get started</h2>
      <form className="mw6 mv5">
        <div className="mv1">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
          </label>
          <input
            className="ba pa2 input-reset ba bg-black  white w-100"
            type="email"
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              setError('');
            }}
          />
        </div>
        <div className="mv3">
          <div className="mv3 tl ba-hover  ">
            <small className=" mid-gray db pl2 pt2 pb1"> Event URL</small>
            <input className="pl2 pb2 input-reset bn  w-90" />
          </div>
          <label className="db fw6 lh-copy f6" htmlFor="password">
            Password
          </label>
          <input
            className="bt-0 br-0 bl-0 bb pa2 input-reset ba bg-black white w-100"
            type="password"
            value={password}
            onChange={(event) => {
              setError("");
              setPassword(event.currentTarget.value);
            }}
          />
        </div>
        <small id="name-desc" className="hljs-strong f6 db mv3">
          {error}
        </small>
        <a
          onClick={handleLogin}
          className="b--white dib dim noselect br-100 b--solid pa2 ph4 f4 fw5"
        >
          {loading && <i className="fa fa-spinner fa-spin mr2" />}
          {loading ? "Logging in..." : "Login"}
        </a>
      </form>
    </div>
  );
};
