//React
import { useState } from 'react';

//Styling
import '../css/Channels.css'

//Components
import ServerChannel from './ServerChannel';
import ChannelsHeader from './ChannelsHeader';

//Firebase
import useGetCollectionDocs from '../hooks/useGetCollectionDocs'
import {db} from '../firebase/firebase'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';

export default function SidebarTextChannels() {
    const [tExpanded, setTExpanded] = useState(false);
    const [addTextError, setAddTextError] = useState();
    const { collectionDocs } = useGetCollectionDocs("channels");


    // Simple make into a dialog popup
    function handleAddTextChannel(e){
        const channelName = prompt("Enter the channel name: ");

        if(channelName){
            addDoc(collection(db, 'channels'), {
                channelName: channelName,
                createdAt: serverTimestamp()
            })
            .catch((error) => {
                setAddTextError(error);
                console.log(addTextError);
            })
        }
    }

    return <section className='channels'>
                <ChannelsHeader title={'TEXT CHANNELS'} expanded={tExpanded} setExpanded={setTExpanded} onClick={handleAddTextChannel}/>

                {tExpanded && <section className='channel__list'>
                                {collectionDocs && collectionDocs.map((channel)  => {
                                    <ServerChannel server={channel.channelName}/>
                                })}
                            </section>}
            </section>;
}