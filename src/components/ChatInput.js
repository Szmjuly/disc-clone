import React from 'react';

import '../css/ChatInput.css'
import { EmojiEmotions, AddAPhoto, Send } from '@mui/icons-material';

export default function ChatInput() {
  return <section className='chat__input'>
            <form>
              <textarea type={'text'} placeholder='Say Something...' maxLength={252}/>
              <section className='chat__inputIcons' >
                <EmojiEmotions fontSize='medium'/>
                <AddAPhoto fontSize='medium' />
              </section>
              <button type='submit' className='send btn'><Send fontSize='small'/></button>
            </form>
        </section>;
}