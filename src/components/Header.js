//React
import React from 'react';

//Styling
import '../css/Header.css'

//JQuery
import $ from 'jquery'

//Components
import PageName from './PageName';
import FriendsNavbar from './FriendsNavbar';
import GeneralNavbar from './GeneralNavbar';

export default function Header({pageName, Icon, friendsNavbar, generalNavbar, isChannelName}) {
    $(document).on('click', 'ul li', function(){
        $(this).addClass('active').siblings().removeClass('active');
      });

    

  return <nav className='page__header'>

            <PageName Icon={Icon} title={pageName} />

            {friendsNavbar && <FriendsNavbar />}
            {generalNavbar && <GeneralNavbar />}  
        </nav>;
}