import { Avatar } from '@mui/material';
import '../css/Msg.css'

export default function Msg(props) {
  return <div className='msg'>
            <Avatar src={props.userPhoto}/>
            <div className='msg__content'>
                <header><h4>{props.user}</h4><span className='msg__timestamp'>{new Date().toDateString(props.timestamp)}</span></header>
                <footer><p>{props.content}</p></footer>
            </div>           
        </div>;
}