import {useState} from 'react'

//Styling
import { CSSTransition } from 'react-transition-group';
import '../css/PopUpMenu.css'
//Icons
import {ArrowDropDown, Settings, ArrowBack} from '@mui/icons-material'

//JQuerry
import $ from 'jquery'
import { useEffect } from 'react';

export default function PopUpMenu({popupOpen}) {
    const [activeMenu, setActiveMenu] = useState('menu-1');
    const [menuHeight, setMenuHeight] = useState(null);

    function handleBackdropClick(e){
        e.preventDefault();
        if(e.target.classList.contains('backdrop')){
            popupOpen = false;
            console.log(popupOpen);
        }
    }

    function calcMenuHeight(el){
        const height = el.offsetHeight;
        setMenuHeight(height);
    }

    function handleClick(){
        // Implement
    }

    function PopUpMenuSection(props){
        return(
            <a href='#' className='popup-menu-section'>
               <div className='popup-menu-section-title'>
                <h4>{props.children}</h4>
               </div>
               <span className='popup-icon-right'>{props.rightIcon}</span>       
            </a>
        )
    }

    function PopUpMenuItem(props){
        return(
            <a href='#' className='popup-menu-item' onClick={handleClick}>
                <span className='popup-menu-btn popup-menu-icon-left'>{props.leftIcon}</span>
                {props.children}
                <span className='popup-menu-icon-right'>{props.rightIcon}</span>
            </a>
        )
    }

    function PopUpMenuNavItem(props){
        return(
            <a href='#' className='popup-menu-item' onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className='popup-menu-btn popup-menu-icon-left'>{props.leftIcon}</span>
                {props.children}
                <span className='popup-menu-icon-right'>{props.rightIcon}</span>
            </a>
        )
    }

  return (
    <div className='backdrop' onClick={handleBackdropClick}>
        <div className='popup-menu' style={{ height: menuHeight }}>
            <CSSTransition in={activeMenu === 'menu-1'}
                            unmountOnExit
                            timeout={200}
                            classNames="menu-primary"
                            onEnter={calcMenuHeight}>
                <div className='menu-1'>
                    <PopUpMenuSection title={'Settings'}>
                        Settings
                    </PopUpMenuSection>
                    <PopUpMenuNavItem leftIcon={<Settings />} 
                                    rightIcon={<ArrowDropDown />} 
                                    goToMenu='menu-2'>
                        Test
                    </PopUpMenuNavItem>
                </div>
            </CSSTransition>

            <CSSTransition in={activeMenu === 'menu-2'} 
                                unmountOnExit 
                                timeout={200} 
                                classNames="menu-secondary"
                                onEnter={calcMenuHeight}>

                    <div className="menu-2">
                        <PopUpMenuNavItem leftIcon={<ArrowBack />} 
                                            goToMenu="menu-1">
                            Back
                        </PopUpMenuNavItem>
                    </div>

            </CSSTransition>
        </div>
    </div>
  )
}