//Styling
import '../css/ServerChannel.css'

//Icons
import {Tag, GraphicEq} from '@mui/icons-material';

export default function ServerChannel({channel, isTextChannel, isVoiceChannel}) {
  return (
    <div className='sidebar__channel'>
      { isTextChannel === 1 && <Tag /> }
      { isVoiceChannel === 1 && <GraphicEq />}
      { channel ? <h4>{channel}</h4> : <h4>No Name</h4> }
    </div>
  );
}