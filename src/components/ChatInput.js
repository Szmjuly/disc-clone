//Styling
import '../css/ChatInput.css'

//Icons
import { EmojiEmotions, AddAPhoto, Send } from '@mui/icons-material';

export default function ChatInput() {
  return <section className='chat__input'>
            <form>
              <textarea type={'text'} placeholder='Say Something...' maxLength={252} rows={1}/>
              <section className='chat__inputIcons' >
                <EmojiEmotions fontSize='medium'/>
                <AddAPhoto fontSize='medium' />
              </section>
              <button type='submit' className='send btn'><Send fontSize='small'/></button>
            </form>
        </section>;
}