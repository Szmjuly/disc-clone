//Styling
import '../css/ServerPage.css'

//Icons
import {Tag} from '@mui/icons-material';

//Components
import Header from '../components/Header';
import ChatInput from '../components/ChatInput'
import ServerSideBar from '../components/ServerSideBar';

export default function ServerPage() {
  return <main className='page'>
            <ServerSideBar />
            <section className='server__page'>
                <Header Icon={Tag} pageName={'general'} generalNavbar={1}/> 

                <section className='page__body'>

                    <section className='server__left__side'>
                        <div className='chat__region'>
                            
                        </div>
                        <ChatInput />
                   
                    </section>

                    <section className='server__right__side'>
                        <header>
                            <h2>Members: </h2>
                        </header>
                    </section>

                </section>
            </section>
        </main>;
}

