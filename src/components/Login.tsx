import * as React from 'react';
import { useState } from 'react';
import Firebase from '../lib/firebase';
import { setCookie } from '../lib';
// import axios, { AxiosResponse } from 'axios';
import Router from 'next/router';

export const Login: React.FunctionComponent = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const handleLogin = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // setSignInText('Signing In...');
    setLoading(true);
    if (!(email && password)) {
      setError('Please fill in email and password');
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
        setCookie('id_token', result.user.uid);
        Router.push('/');
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
    <div className={'pv1 tc'}>
      <h1 className="mb0 mt3 pt3">Login</h1>
      <h4 className="gray mt0">
        Don't have an account?{' '}
        <span>
          <a href="/signup" className="white">
            Sign up
          </a>
        </span>
      </h4>
      <form className="mw6 center mv5">
        <div className="mv3">
          <div className="mv3 tl ba-hover  ">
            <small className=" db pl2 pt2 pb1"> Email Address</small>
            <input
              className="pl2 pb2 input-reset bn  w-90"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.currentTarget.value);
                setError('');
              }}
            />
          </div>
        </div>
        <div className="mv3 tl ba-hover  ">
          <small className=" db pl2 pt2 pb1"> Password</small>
          <input
            className="pl2 pb2 input-reset bn  w-90"
            type="password"
            value={password}
            onChange={(event) => {
              setError('');
              setPassword(event.currentTarget.value);
            }}
          />
        </div>
        <small id="name-desc" className="hljs-strong f6 db mv3">
          {error}
        </small>
        <div className="mv3 tl pv2">
          <input type="checkbox" />
          <label className="pl2">
            Subscribe to Social Ticketing Newsletter
          </label>
        </div>
        <a
          onClick={handleLogin}
          className="b--white dib dim noselect fl br-100 b--solid pa2 ph4 f4 fw5"
        >
          {loading && <i className="fa fa-spinner fa-spin mr2" />}
          {loading ? 'Logging in...' : 'Login'}
        </a>

        <div className="mt4 tl dib  pt3">
          <a className="white b" href="">
            Forgot password?{' '}
          </a>
        </div>
      </form>
    </div>
  );
};
