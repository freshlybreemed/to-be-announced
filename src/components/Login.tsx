import * as React from 'react';
import { useState } from 'react';
import Firebase from '../lib/firebase';
import { setCookie } from '../lib';
// import axios, { AxiosResponse } from 'axios';
import Router from 'next/router';

export const Login: React.FunctionComponent = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    // setSignInText('Signing In...');
    // setLoading(true);
    if (!(email && password)) {
      // setError('Please fill in email and password');
      // setSignInText('Sign In');
      // setLoading(false);
      return;
    }

    let isError = false;
    Firebase.login(Firebase.EMAIL, { email, password })
      .catch(() => {
        // const message =
        //   result && result.code.split('/')[1] === 'user-not-found'
        //     ? "Sorry, we couldn't find an account with that username. Please try again."
        //     : "Sorry, that password isn't right. Please try again.";
        // setError(message);
        // setSignInText('Sign In');
        // setLoading(false);
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
    <div className={'pv1'}>
      <h1>TBA fills rooms with fans - Login now to get started</h1>
      <div className="mv5">
        <div className="mv1">
          <label className="db fw6 lh-copy f6" htmlFor="email-address">
            Email
          </label>
          <input
            className="pa2 input-reset ba bg-black white w-100"
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
        <a
          onClick={handleLogin}
          className="b--white dib dim noselect br-100 b--solid pa2 ph4 f4 fw5"
        >
          Login
        </a>
      </div>
    </div>
  );
};
