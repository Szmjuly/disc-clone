//Styling
import '../css/ServerPage.css'

//Icons
import {Tag} from '@mui/icons-material';

//Components
import Header from '../components/Header';

import ServerSideBar from '../components/ServerSideBar';
import { useSelector } from 'react-redux';
import { selectChannelId, selectChannelName } from '../features/channelSlice';
import { selectUser } from '../features/userSlice';
import Chat from '../components/Chat';

export default function ServerPage() {
    const currentUser = useSelector(selectUser);

    const channelName = useSelector(selectChannelName);
    const channelId = useSelector(selectChannelId);

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

