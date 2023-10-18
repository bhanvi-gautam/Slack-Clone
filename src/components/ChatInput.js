import React, { useState } from 'react';
import "./ChatInput.css";
import db from '../firebase';
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";
import { useStateValue } from './StateProvider';
// import { Button } from '@mui/material';

function ChatInput({channelName,channelId}) {
    const [input,setInput]=useState('');
    const [{user}]=useStateValue();

    const sendMessage= (e)=>{
        e.preventDefault();
        if(channelId && typeof channelId === "string" && channelId.trim() !== ""){
            db.collection('rooms').doc(channelId).collection('messages').add({
                message: input,
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                user: user.displayName,
                userImage: user.photoURL,
            });
        }
        setInput('');
    };

  return (
    <div className='chatInput'>
      <form>
        <input
        value={input}
        onChange={e => setInput(e.target.value)}
         placeholder={`Message #${channelName?.toLowerCase()}`}/>
        <button type='submit' onClick={sendMessage}>SEND</button>
      </form>
    </div>
  )
}

export default ChatInput
