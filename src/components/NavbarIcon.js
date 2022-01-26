import React from 'react';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'

export default function NavbarIcon({Icon, Tooltip, onClick}) {
  return <>
            <Tippy theme='theme1' placement='right' content={Tooltip} >
                <button className='nav-icon' onClick={onClick}>
                    <Icon />
                </button>
            </Tippy>
        </>;
}