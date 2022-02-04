//React
import { useState } from 'react';

//Components
import { IconButton } from '@mui/material';

export default function HeaderItem(props) {
const [mainDropdownOpen, setMainDropdownOpen] = useState(false);

const handleDropdownClick = () => {
    setMainDropdownOpen(!mainDropdownOpen);
}
  return <li className='header-nav-itm'>
            <IconButton style={{backgroundColor: 'var(--header-btn-color)'}} onClick={handleDropdownClick} className='dropdown-btn'>
                {props.icon}
            </IconButton>

            {mainDropdownOpen && props.children}
        </li>;
}