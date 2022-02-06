import { Avatar } from '@mui/material';
import '../css/Msg.css'

export default function Msg() {
  return <div className='msg'>
            <Avatar />
            <section className='msg__info'>
                <h4>userName<span className='msg__timestamp'>this is a timestamp</span></h4>
                <p>this is the content</p>
            </section>
            
        </div>;
}