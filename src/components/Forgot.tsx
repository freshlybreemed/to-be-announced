import * as React from 'react';
import { useState } from 'react';
import Firebase from '../lib/firebase';


export const Forgot: React.FunctionComponent = ({}) => {
  const [email, setEmail] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [forgot, setForgot] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  
  React.useEffect(()=>{
    setLoading(false);
  },[email])

  const handleForgot = async (event: React.FormEvent<HTMLElement>) => {
    event.preventDefault();
    setLoading(true);
    if (!(email)) {
      setError('Please fill in email');
      // setSignInText('Sign In');
      // setLoading(false);
      return;
    }
    let isError = false;
    Firebase.resetPassword(email)
    .then(res=>{
      setLoading(false);
      console.log('yuer')
      setForgot(true)
    })
    .catch((result) => {
      setError(result.message);
      setLoading(false);
      isError = true;
    })
  };

  return (
    <div className={'pv1 tc'}>
      <h1 className="mb0 mt3 pv3 font-bold">Forgot your password</h1>
      <h4 className="gray mt0">
        Don't have an account?{' '}
        <span>
          <a href="/signup" className="white">
            Sign up
          </a>
        </span>
      </h4>
      <form className="dib w-100 mw6 center mv5">
        <div className="mv3">
          {forgot ? "Your password has been reset! Please check your email for the final step in resetting your password":
          <div className="mv3 tl ba-hover  ">
            <small className=" db pl2 pt2 pb1"> Email Address</small>
            <input
              className="pl2 pb2 input-reset bg-transparent w-90"
              type="email"
              value={email}
              onChange={(event) => {
                setEmail(event.currentTarget.value);
                setError('');
              }}
            />
          </div>
          }
        </div>
        <small id="name-desc" className="hljs-strong f6 db mv3">
          {error}
        </small>
        {!forgot && <div className="fl dib pt3">
          <button
            onClick={handleForgot}
            className="b--white db dim noselect fl ba bw2 br-100 b--solid pa2 ph4 f4 fw5"
          >
            {loading && <i className="fa fa-spinner fa-spin mr2" />}
            {loading ? 'Submitting...' : 'Submit'}
            
          </button>
        </div>}
      </form>
    </div>
  );
};
