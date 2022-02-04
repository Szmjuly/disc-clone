//React
import { useState } from 'react';

//Styling
import '../css/Channels.css'

//Components
import ServerChannel from './ServerChannel';
import ChannelsHeader from './ChannelsHeader';

export default function ServerTextChannels() {
    const [vExpanded, setVExapanded] = useState(false);

    return <section className='channels'>
                <ChannelsHeader title={'VOICE CHANNELS'} expanded={vExpanded} setExpanded={setVExapanded} />

                {vExpanded && <section id='chnls' className='channel__list'>
                                <ServerChannel isVoiceChannel={1} channel={'test'}/>
                            </section>}
            </section>;
}