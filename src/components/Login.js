import React from 'react';
import "./Login.css";
import Button from '@mui/material/Button';
import { auth,provider } from '../firebase';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

function Login() {
const [state,dispatch]=useStateValue();

    const signIn=()=>{
        // e.preventDefault();
        auth
        .signInWithPopup(provider)
        .then((result)=>{
            console.log(result);
            dispatch({
                type: actionTypes.SET_USER,
                user: result.user
            });
            // window.close();
        })
        .catch((error)=>{
            alert(error.message);
        })
    }
  return (
    <div className='login'>
      <div className="login__container">
        <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Slack_icon_2019.svg" alt="" />
        <h1>Sign in to Slack</h1>
        <p>bhanvigautam.slack.com</p>
        <Button onClick={signIn} className="login__button" variant="contained" color="primary">
          Sign In with Google
        </Button>
      </div>
    </div>
  )
}

export default Login
