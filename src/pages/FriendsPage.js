import React from 'react';
import '../css/friendsPage.css'

import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People'
import ActivityRegion from '../components/ActivityRegion';
import Header from '../components/Header';
import FriendsSideBar from '../components/FriendsSideBar'

export default function FriendsPage() {
  return <main className='page'>
      <FriendsSideBar />
           
            <section className='friends__page'>

            <Header Icon={PeopleIcon} pageName={'Friends'} navbar={1} item1={'Online'} item2={'All'} item3={'Pending'} item4={'Blocked'} addFriend={1}/>
                        <section className='page__body'>
                            <section className='left__side'>
                                <div className='friend__search'>
                                    <input type={'text'} placeholder='Looking for someone?'/>
                                    <SearchIcon />
                                </div>
                            </section>

                            <section className='activity__right__side'>
                                <ActivityRegion />
                            </section>
                        </section>
            </section>
        </main>;
}