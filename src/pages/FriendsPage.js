import React from 'react';
import '../css/friendsPage.css'

import SearchIcon from '@mui/icons-material/Search';
import PeopleIcon from '@mui/icons-material/People'
import ActivityRegion from '../components/ActivityRegion';
import Header from '../components/Header';

export default function FriendsPage() {
  return <div className='page'>
      <Header Icon={PeopleIcon} pageName={'Friends'} navbar={1} item1={'Online'} item2={'All'} item3={'Pending'} item4={'Blocked'} addFriend={1}/>
            <section className='friends__page__body'>
                <div className='friends__section'>
                    <div className='friend__search'>
                        <input type={'text'} placeholder='Looking for someone?'/>
                        <SearchIcon />
                    </div>
                </div>

                {/* Activity Region - Right Most Side */}
                <ActivityRegion />
            </section>

        </div>;
}