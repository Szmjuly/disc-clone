import React from 'react';

import '../css/ChatInput.css'

export default function ChatInput() {
  return <div className='chat__input'>
            <button type='button' className='add-btn'/>
            <input type={'text'} placeholder='Say Something...' />
        </div>;
}