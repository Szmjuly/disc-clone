//Styling
import '../css/ServerPage.css'

//Icons
import {Tag} from '@mui/icons-material';

//Components
import Header from '../components/Header';

import ServerSideBar from '../components/ServerSideBar';
import { useDispatch, useSelector } from 'react-redux';
import { selectChannelName, setChannelInfo } from '../features/channelSlice';
import { selectUser } from '../features/userSlice';
import Chat from '../components/Chat';
import { useEffect } from 'react';
import { selectServerName, setServerInfo } from '../features/serverSlice';

export default function ServerPage() {

    
    const dispatch = useDispatch();
    const currentUser = useSelector(selectUser);

    let channelName = useSelector(selectChannelName);
    let serverName = useSelector(selectServerName);

    useEffect(() => {
        serverName = JSON.parse(localStorage.getItem('last-server-name'));
        channelName = JSON.parse(localStorage.getItem('last-channel-name'));
        if(serverName){
            dispatch(setServerInfo({ serverName: serverName }))
            console.log(serverName);
        }

        if(channelName){
            setChannelInfo({ channelName: channelName });
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('last-server-name', JSON.stringify(serverName));
    })

  return <main className='page'>
            <ServerSideBar />
            <section className='server__page'>
                <Header Icon={Tag} pageName={channelName} generalNavbar={1}/> 

                <section className='page__body'>

                    <Chat />

                    <section className='server__right__side'>
                        <header>
                            <h2>Members: </h2>
                        </header>
                    </section>

                </section>
            </section>
        </main>;
}

