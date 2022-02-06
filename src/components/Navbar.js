//React
import React, { useState } from 'react';
import { useNavigate } from 'react-router'

//Styling
import '../css/Navbar.css'

//Icons
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add'

//Components
import NavbarIcon from './NavbarIcon';

//Redux and Firebase stuff
import {db} from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import useFirestore from '../hooks/useFirestore';
import { useDispatch } from 'react-redux';
import { setServerInfo } from '../features/serverSlice';

export default function Navbar() {
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [createServerError, setCreateServerError] = useState();
  const { docs } = useFirestore('servers');

  function handleAddServer(){
    const serverName = prompt("Enter Server Name: ");

    if(serverName){
      addDoc(collection(db, "servers"), {
        serverName: serverName,
        createdAt: serverTimestamp(),
      })
      .catch((error) => {
        setCreateServerError(error);
        console.log("🚀 ~ file: Navbar.js ~ line 29 ~ handleAddServer ~ createServerError", createServerError);
      })
    }
  }

  function handleHomeRoute(){ navigate('/'); }

    return (<div className='navbar'>
              <section className='navbar__top'>
                <NavbarIcon isHomeBtn={1} Icon={HomeIcon} Tooltip={'Home'} onClick={handleHomeRoute}/>
              </section>
              
              <section className='navbar__btm'>
                <section className='server__list'>
                  {docs.map((server) => (
                    <div key={server.id}>
                      <NavbarIcon Tooltip={server.serverName} onClick={() => {dispatch( setServerInfo({ serverId: server.id, serverName: server.serverName }) ); navigate('/server'); }} />
                    </div>
                  ))}
                </section>
                <NavbarIcon Icon={AddIcon} Tooltip={'Add a Server'} onClick={handleAddServer}/>
              </section>
            </div>);
}