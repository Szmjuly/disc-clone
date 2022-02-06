//React
import { useState } from 'react';

//Styling
import '../css/GeneralDropdownMenu.css'
import { CSSTransition } from 'react-transition-group';

//Components
import { Avatar } from '@mui/material';

//Icons
import {ArrowDropDown, Settings, ArrowBack, Logout} from '@mui/icons-material'

//Redux Stuff
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase/firebase';

export default function GeneralDropdownMenu() {
    const [activeMenu, setActiveMenu] = useState('main');
    const [menuHeight, setMenuHeight] = useState(null);
    const currentUser = useSelector(selectUser);

    function calcMenuHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function DropDownItem(props){
        return(
            <a href='#' className='dropdown-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='dropdown-btn dropdown-icon-left'>{props.leftIcon}</span>
                {props.children}
                <span className='dropdown-icon-right'>{props.rightIcon}</span>
            </a>
        )
    }

    function DropDownAvatar(props){
        return(
            <a href='#' className='dropdown-avatar'>
               <Avatar src={props.avatar} />
               <div className='dropdown-name'>
                <h4>{props.children}</h4>
                <h6>View your Profile</h6>
               </div>
               <span className='dropdown-icon-right'>{props.rightIcon}</span>       
            </a>
        )
    }

    function handleLogoutClick(){
        auth.signOut();
    }

    function DropDownItemLogout(props){
        return  <a href='#' className='dropdown-item' onClick={handleLogoutClick}>
                    <span className='dropdown-btn dropdown-icon-left'>{props.leftIcon}</span>
                    {props.children}
                    <span className='dropdown-icon-right'>{props.rightIcon}</span>
                </a>
    }
    
    return <div className='dropdown' style={{ height: menuHeight }}>
            <CSSTransition in={activeMenu === 'main'} 
                            unmountOnExit 
                            timeout={200} 
                            classNames="menu-primary"
                            onEnter={calcMenuHeight}>
                <div className='menu'>
                    <DropDownAvatar avatar={currentUser.photo}>{currentUser.displayName}</DropDownAvatar>
                    <hr style={{marginBottom: '10px'}}/>
                    <DropDownItem leftIcon={<Settings />} 
                                  rightIcon={<ArrowDropDown />} 
                                  goToMenu='settings'>
                        Settings
                    </DropDownItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'settings'} 
                            unmountOnExit 
                            timeout={200} 
                            classNames="menu-secondary"
                            onEnter={calcMenuHeight}>
                <div className="menu">
                    <DropDownItem leftIcon={<ArrowBack />} 
                                  goToMenu="main">
                        Back
                    </DropDownItem>
                    <DropDownItemLogout leftIcon={<Logout fontSize='small'/>}>Log Out</DropDownItemLogout>
                </div>
            </CSSTransition>
        </div>;
}