import React from 'react';
import './App.css';
import Login from './components/Login';
import Chat from './components/Chat';
import Header from './components/Header'
import Sidebar from './components/Sidebar';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useStateValue } from './components/StateProvider';

function App() {
  const [{user},dispatch] =useStateValue();
  return (
    
    <div className="App">
      <Router>
        {!user ? (
          <Login/>
        ):(

        <>
      <Header/>
      <div className='app__body'>
      {/* <div className="app__serch baar"></div> */}
      <Sidebar/>
      <Routes>
      <Route path="/room/:roomId" element={<Chat/>} />
      <Route path="/" element={<h1>Welcome</h1>} />
      </Routes>
      </div>
      </>
        )}
      </Router>
    </div>
    
  );
}

export default App;
