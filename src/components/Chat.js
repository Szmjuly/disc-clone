import '../css/Chat.css'
import '../css/ChatInput.css'

//Icons
import { EmojiEmotions, AddAPhoto, Send } from '@mui/icons-material';

//Components
// import ChatInput from '../components/ChatInput'
import Msg from '../components/Msg.js'

export default function Chat() {
  return <section className='chat'>
            <section className='chat__msgs'>
                <Msg />
            </section>
            
            <section className='chat__input'>
            <form>
              <textarea type={'text'} placeholder='Say Something...' maxLength={252} rows={1}/>
              <section className='chat__inputIcons' >
                <EmojiEmotions fontSize='medium'/>
                <AddAPhoto fontSize='medium' />
              </section>
              <button type='submit' className='send btn'><Send fontSize='small'/></button>
            </form>
        </section>

        </section>;
}