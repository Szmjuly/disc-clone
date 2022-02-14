//React
import { useState } from 'react';

//Styling
import '../css/Channels.css'
import '../css/ServerChannel.css'

//Components
import ServerChannel from './ServerChannel';
import ChannelsHeader from './ChannelsHeader';

//Firebase and Redux
import useGetServerChannels from '../hooks/useGetServerChannels'
import {db} from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useDispatch, useSelector } from 'react-redux';
import { setChannelInfo } from '../features/channelSlice';
import { selectServerId } from '../features/serverSlice'

export default function SidebarTextChannels() {
    const dispatch = useDispatch();

    const [tExpanded, setTExpanded] = useState(false);
    const [createTxtChannelError, setCreateTxtChannelError] = useState();
    const serverId = useSelector(selectServerId);

    const { serverChannels } = useGetServerChannels('/txt-channels');
    
    // Simple make into a dialog popup
    function handleAddTextChannel(e){
        e.preventDefault();
        const channelName = prompt("Enter the channel name: ");
    
        if(channelName){
            addDoc(collection(db ,'servers/' + serverId + '/txt-channels'), {
                channelName: channelName,
                createdAt: serverTimestamp()
            })
            .catch((error) => {
                setCreateTxtChannelError(error);
                console.log("🚀 ~ file: ServerTextChannels.js ~ line 37 ~ handleAddTextChannel ~ createTxtChannelError", createTxtChannelError);
            })
        }
    }

    return <section className='channels'>
                <ChannelsHeader title={'TEXT CHANNELS'} expanded={tExpanded} setExpanded={setTExpanded} onClick={handleAddTextChannel}/>

                {tExpanded && <section className='channel__list'>
                                       {serverChannels.map((channel) => (
                                           <div key={channel.id}>
                                                <ServerChannel isTextChannel={1} channel={channel.channelName} onClick={() => 
                                                    dispatch( setChannelInfo({ channelId: channel.id, channelName: channel.channelName }) )}
                                                />
                                           </div>
                                       ))}
                            </section>}
            </section>;
}