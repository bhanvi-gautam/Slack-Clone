import React, { useEffect, useState } from 'react';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import ExpandLessRoundedIcon from '@mui/icons-material/ExpandLessRounded';
import FileCopyRoundedIcon from '@mui/icons-material/FileCopyRounded';
import AppsIcon from '@mui/icons-material/Apps';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import DraftsRoundedIcon from '@mui/icons-material/DraftsRounded';
import InboxRoundedIcon from '@mui/icons-material/InboxRounded';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CreateIcon from '@mui/icons-material/Create';

import db from '../firebase';
import "./Sidebar.css";
import { useStateValue } from './StateProvider';

import SidebarOption from './SidebarOption'; 


function Sidebar() {
  const [channels, setChannels]=useState([]);
  const [{user}]=useStateValue();

  useEffect(()=>{
    db.collection('rooms').onSnapshot(snapshot=>(
      setChannels(
        snapshot.docs.map(doc=>({
          id: doc.id,
          name: doc.data().name
        }))
        )
    ));
  },[])
  return (
    <div className='sidebar'>
      <div className="sidebar__header">
        <div className="sidebar__info">
        <h2>Hola People!</h2>
        <h3>
          <FiberManualRecordIcon/> 
          {user?.displayName}
        </h3>
        </div>
        <CreateIcon/>
      </div>
      <SidebarOption Icon={InsertCommentIcon} title="Threads"/>
      <SidebarOption Icon={InboxRoundedIcon} title="Mentions & Reactions"/>
      <SidebarOption Icon={DraftsRoundedIcon} title="Saved Items"/>
      <SidebarOption Icon={BookmarkBorderRoundedIcon} title="Channel Browser"/>
      <SidebarOption Icon={PeopleAltRoundedIcon} title="People & User Groups"/>
      <SidebarOption Icon={AppsIcon} title="Apps"/>
      <SidebarOption Icon={FileCopyRoundedIcon} title="File Browser"/>
      <SidebarOption Icon={ExpandLessRoundedIcon} title="Show Less"/>
      <hr/>
      <SidebarOption Icon={ExpandMoreRoundedIcon} title="Channels"/>
      <hr/>
      <SidebarOption Icon={AddRoundedIcon} addChannelOption title="Add Channel"/>

      {channels.map(channel=> (
        <SidebarOption key={channel.id} title={channel.name} id={channel.id}/>
      ))}
    </div>
  )
}

export default Sidebar
