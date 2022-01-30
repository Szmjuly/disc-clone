import React from 'react';
import { useNavigate } from 'react-router'

//Styling
import '../css/Navbar.css'

//Icons
import HomeIcon from '@mui/icons-material/Home';
import AddIcon from '@mui/icons-material/Add'

//Components
import NavbarIcon from './NavbarIcon';
import CreateServerDialog from './CreateServerDialog';

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  let navigate = useNavigate();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  function handleHomeRoute(){ navigate('/'); }
  function handleServerRoute(){ navigate('/server'); }

    return (<div className='navbar'>
              <section className='navbar__top'>
                <NavbarIcon isHomeBtn={1} Icon={HomeIcon} Tooltip={'Home'} onClick={handleHomeRoute}/>
              </section>
              
              <section className='navbar__btm'>
                <section className='server__list'>
                  <NavbarIcon Tooltip={'Test Server'} onClick={handleServerRoute}/>
                </section>
                <NavbarIcon Icon={AddIcon} Tooltip={'Add a Server'} onClick={handleClickOpen}/>
              </section>

              <CreateServerDialog open={open} onClose={handleClose}/>
            </div>);
}