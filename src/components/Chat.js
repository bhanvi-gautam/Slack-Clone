import React, { useEffect,useState } from 'react'
import "./Chat.css"
import db from '../firebase';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';
import { useParams } from 'react-router-dom';
import Message from './Message';
import ChatInput from './ChatInput';

function Chat() {
    const {roomId}=useParams();
    const [roomDetails,setRoomDetails]=useState(null);
    const [roomMessages,setRoomMessages]=useState([]);

    useEffect(()=>{
        if(roomId){
            db.collection('rooms').doc(roomId).onSnapshot(snapshot=>(
                setRoomDetails(snapshot.data())
            ))
        }
        db.collection('rooms').doc(roomId)
        .collection('messages')
        .orderBy('timestamp','asc')
        .onSnapshot(
            snapshot=> setRoomMessages(
                snapshot.docs.map(doc=> doc.data())
                // ({
        //             message: doc.data().message,
        //             timestamp: doc.data().timestamp,
        //             user: doc.data().user,
        //             userImage: doc.data().userImage,
        //             key: doc.id,
        //         })
        //     )
            )
        )
    },[roomId]);
    console.log(roomMessages);
  return (
    <div className='chat'>
       {/* <h2>You are in {roomId} room</h2> */}
       <div className="chat__header">
        <div className="chat__headerLeft">
            <h4 className="chat__channelName">
                <strong>#{roomDetails?.name}</strong>
                <StarBorderOutlinedIcon/>
            </h4>
        </div>
        <div className="chat__headerRight">
            <p>
                <InfoOutlinedIcon/>Details
            </p>
        </div>
       </div>

       <div className="chat__messages">
        {roomMessages.map(({message,timestamp,user,userImage})=>(
            <Message
            message={message}
            timestamp={timestamp}
            user={user}
            userImage={userImage}
            />
        ))}
       </div>

       <ChatInput channelName={roomDetails?.name} channelId={roomId}/>
    </div>
  )
}

export default Chat
