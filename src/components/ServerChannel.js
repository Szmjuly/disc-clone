//Styling
import '../css/ServerChannel.css'

//Icons
import {Tag, GraphicEq} from '@mui/icons-material';

export default function ServerChannel({channel, isTextChannel, isVoiceChannel, onClick}) {
  return (
    <div className='sidebar__channel' onClick={onClick}>
      { isTextChannel && <Tag /> }
      { isVoiceChannel && <GraphicEq />}
      { channel ? <h4>{channel}</h4> : <h4>No Name</h4> }
    </div>
  );
}