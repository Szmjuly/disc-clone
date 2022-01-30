import { useState } from 'react';
import '../css/Sidebar.css'

import SidebarChannel from './SidebarChannel';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Add } from '@mui/icons-material';

function ServerSideBar({server}) {
    const [txtExpanded, setTxtExpanded] = useState(false);
    const [vcExpanded, setVCExpanded] = useState(false);

    const handletxtExpand = () => {
        setTxtExpanded(!txtExpanded);
      };

      const handleVCExpand = () => {
        setVCExpanded(!vcExpanded);
      };

  return <section className='sidebar'>
            <header className='server'>
                {server ? <h2>{server}</h2> : <h2>No Name</h2>}
            </header>

            <hr style={{color: 'var(--sidebar-seperator-color)', borderTop: '1px solid'}}/>

            <section className='channels'>
                <section className='txt__channels'>
                    <header className='tc__head'>
                        <h5 onClick={handletxtExpand}>{(txtExpanded) ? <ExpandMoreIcon className='rotateSvg'/> : <ExpandMoreIcon />}TEXT CHANNELS</h5>
                        <button className='addChannelBtn'><Add /></button>
                    </header>

                    {txtExpanded && <section id='chnls' className='channel__list'>
                                                <SidebarChannel isTextChannel={1} channel={'test'}/>
                                                <SidebarChannel isTextChannel={1} channel={'general'}/>
                                                <SidebarChannel isTextChannel={1} channel={'general'}/>
                                            </section>}
                </section>
                
                <section className='vc__channels'>
                    <header className='vc__head'>
                        <h5 onClick={handleVCExpand}>{(vcExpanded) ? <ExpandMoreIcon className='rotateSvg'/> : <ExpandMoreIcon />}VOICE CHANNELS</h5>
                        <button className='addChannelBtn'><Add /></button>
                    </header>

                    <section id={'chnls'} className='channel__list'>
                        <SidebarChannel isVoiceChannel={1} channel={'test'}/>
                    </section>

                </section>
            </section>

        </section>;
}

export default ServerSideBar;
