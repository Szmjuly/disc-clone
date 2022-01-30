import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

export default function NavbarIcon({isHomeBtn, Icon, Tooltip, onClick}) {
  return <>
            <Tippy theme='theme1' placement='right' content={Tooltip} >
                {isHomeBtn === 1 ? <button className='nav-icon homeBtn' onClick={onClick}>
                                        {Icon && <Icon />}
                                    </button> 
                                :
                                    <button className='nav-icon' onClick={onClick}>
                                        {Icon && <Icon />}
                                    </button>}
            </Tippy>
        </>;
}