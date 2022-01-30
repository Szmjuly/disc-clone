import React from 'react';

import '../css/SidebarChannel.css'
import TagIcon from '@mui/icons-material/Tag';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';

export default function SidebarChannel({channel, isTextChannel, isVoiceChannel}) {
  return (
    <div className='sidebar__channel'>
      { isTextChannel === 1 && <TagIcon /> }
      { isVoiceChannel === 1 && <GraphicEqIcon />}
      { channel ? <h4>{channel}</h4> : <h4>No Name</h4> }
    </div>
  );
}