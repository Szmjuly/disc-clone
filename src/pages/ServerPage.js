import React from 'react';
import '../css/ServerPage.css'

import TagIcon from '@mui/icons-material/Tag';
import Header from '../components/Header';
import ChatInput from '../components/ChatInput'
import ServerSideBar from '../components/ServerSideBar';

export default function ServerPage() {
  return <main className='page'>
      <ServerSideBar />
            <section className='server__page'>
                <Header Icon={TagIcon} pageName={'general'}/> 

                <section className='page__body'>

                    <section className='server__left__side'>
                        <div className='chat__region'>
                            
                        </div>
                        <ChatInput />
                   
                    </section>

                    <section className='server__right__side'>
                        <header>
                            <h2>Members: </h2>
                            {/* <p>online - </p> */}
                        </header>
                    </section>

                </section>
            </section>
        </main>;
}