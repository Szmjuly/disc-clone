import React from 'react';

//Styling
import '../css/Navbar.css'

//Icons
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add'

//Components
import NavbarIcon from './NavbarIcon';

export default function Navbar() {
    return (<div className='navbar'>
              <section className='navbar__top'>
                <NavbarIcon Icon={HomeIcon} Tooltip={'Home'}/>
              </section>
              
              <section className='navbar__btm'>
                <NavbarIcon Icon={AddIcon} Tooltip={'Add a Server'}/>
              </section>
            </div>);
}