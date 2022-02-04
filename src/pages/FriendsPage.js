//Styling
import '../css/FriendsPage.css'

//Icons
import {Search, People} from '@mui/icons-material';

//Components
import FriendsSideBar from '../components/FriendsSideBar'
import ActivityRegion from '../components/ActivityRegion';
import Header from '../components/Header';

export default function FriendsPage() {
  return <main className='page'>
      <FriendsSideBar />
           
            <section className='friends__page'>

            <Header Icon={People} pageName={'Friends'} friendsNavbar={1} generalNavbar={1}/>

                        <section className='page__body'>
                            <section className='left__side'>
                                <div className='friend__search'>
                                    <input type={'text'} placeholder='Looking for someone?'/>
                                    <Search />
                                </div>
                            </section>

                            <section className='activity__right__side'>
                                <ActivityRegion />
                            </section>
                        </section>
            </section>
        </main>;
}