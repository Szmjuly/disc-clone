//React
import React, { useState } from 'react';
import { useNavigate } from 'react-router'

//Styling
import '../css/Navbar.css'

//Icons
import {Home, Add, WifiChannel, AddBox} from '@mui/icons-material';

//Components
import NavbarIcon from './NavbarIcon';

//Redux and Firebase stuff
import {db} from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import useFirestore from '../hooks/useFirestore';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, setUserInfo } from '../features/userSlice';
import { setServerInfo } from '../features/serverSlice';

export default function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const currentUser = useSelector(selectUser);

  const [createServerError, setCreateServerError] = useState();
  const { docs } = useFirestore('servers');

  function handleAddServer(e){
    e.preventDefault();
    const serverName = prompt("Enter Server Name: ");

    if(serverName){
      addDoc(collection(db, "servers"), {
        serverName: serverName,
        createdAt: serverTimestamp(),
      })
      .then(() => {
        addDoc(collection(db, "users/" + currentUser.uid + '/servers'), {
          serverName: serverName,
          createdAt: serverTimestamp(),
        })
      })
      .catch((error) => {
        setCreateServerError(error);
        console.log("🚀 ~ file: Navbar.js ~ line 29 ~ handleAddServer ~ createServerError", createServerError);
      })
    }
  }

  function handleJoinServer(e){
    e.preventDefault();
    const serverConnectId = prompt("Enter the Server Id");

    if(serverConnectId){}
  }

  function handleHomeRoute(){ navigate('/'); }
  function handleWordleRoute(){ navigate('/wordle'); }

    return (<div className='navbar'>
              <section className='navbar__top'>
                <NavbarIcon isHomeBtn={1} Icon={Home} Tooltip={'Home'} onClick={handleHomeRoute}/>
                <NavbarIcon Tooltip={'Wordle'} onClick={handleWordleRoute} />
              </section>
              
              <section className='navbar__btm'>
                <section className='server__list'>
                  {docs.map((server) => (
                    <div key={server.id}>
                      <NavbarIcon Icon={WifiChannel} Tooltip={server.serverName} onClick={(e) => { localStorage.setItem('last-server-name', JSON.stringify(server.serverName)); dispatch(setServerInfo({ serverId: server.id, serverName: server.serverName })); navigate('/server');  }} />
                    </div>
                  ))}
                </section>
                <NavbarIcon Icon={AddBox} Tooltip={'Join a Server'} onClick={handleJoinServer}/>
                <NavbarIcon Icon={Add} Tooltip={'Create a Server'} onClick={handleAddServer}/>
              </section>
            </div>);
}