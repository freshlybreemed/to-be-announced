import * as React from 'react';
import { useState } from 'react';
import Firebase from '../lib/firebase';
import { setCookie } from '../lib';
import axios from 'axios';
import Router from 'next/router';

export const SignUp: React.FunctionComponent = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSignUp = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!(email && password)) {
      setError('Please fill in email and password');
      return;
    }
    let isError = false;
    Firebase.signup({ email, password })
      .catch((result) => {
        const message =
          result && result.message ? result.message : 'Sorry Some error occurs';
        isError = true;
        setLoading(false);
        setError(message);
      })
      .then((result: any) => {
        if (isError) {
          return setLoading(false);
        }
        if (typeof result !== 'undefined') {
          console.log(result);
          axios
            .post('/api/user', {
              user: {
                firebase: result.user,
                email: result?.user?.email,
                new: true,
                info: { firstName, lastName },
              },
            })
            .then(() => {
              setCookie('id_token', result.user.uid);
              // Router.push('/user');
            });
        }
      });
  };

  return (
    <div className={'pv1 tc'}>
      <h1 className="mb0 mt3 pt3">Create An Account</h1>
      <h4 className="gray mt0">
        Already have an account?{' '}
        <span>
          <a href="/login" className="white">
            Sign in
          </a>
        </span>
      </h4>
      <form className="mw6 center mv5">
        <div className="mv3 w-100">
          <div className="dib w-50 pr2">
            <div className="tl ba-hover overflow-visible">
              <small className="db pl2 pt2 pb1"> First Name </small>
              <input
                value={firstName}
                onChange={(event) => {
                  setFirstName(event.currentTarget.value);
                  setError('');
                }}
                className="pl2 white pb2 bg-transparent  input-reset  bn w-90"
              />
            </div>
          </div>
          <div className="dib  w-50 ">
            <div className="tl ba-hover overflow-visible">
              <small className=" db pl2 pt2 pb1"> Last Name </small>
              <input
                value={lastName}
                onChange={(event) => {
                  setLastName(event.currentTarget.value);
                  setError('');
                }}
                className="pl2 white pb2 bg-transparent input-reset  bn w-90"
              />
            </div>
          </div>
        </div>
        <div className="mv3 tl ba-hover  ">
          <small className=" db pl2 pt2 pb1"> Email Address</small>
          <input
            className="pl2 white pb2 bg-transparent input-reset bn  w-90"
            value={email}
            onChange={(event) => {
              setEmail(event.currentTarget.value);
              setError('');
            }}
          />
        </div>
        <div className="mv3 tl ba-hover  ">
          <small className=" db pl2 pt2 pb1"> Password</small>
          <input
            className="pl2 pb2 bg-transparent input-reset bn  w-90"
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
          onClick={handleSignUp}
          className="b--white dib dim noselect fl  br-100 b--solid pa2 ph4 f4 fw5"
        >
          {loading && <i className="fa fa-spinner fa-spin mr2" />}
          {loading ? 'Creating Account...' : 'Create Account'}
        </a>
        <div className="mt4 tl dib pt3">
          By creating an account you agree to our{' '}
          <a className="white b" href="">
            Privacy Policy
          </a>{' '}
          and{' '}
          <a className="white b" href="">
            Terms and Conditions.
          </a>
        </div>
      </form>
    </div>
  );
};
