import '../css/Sidebar.css'
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';

function FriendsSideBar() {
  return <div className='sidebar'>
            <header className='sidebar__search'>
                <input type={'text'} placeholder='Search for Someone'/>
            </header>
                  
            <hr style={{color: 'var(--sidebar-seperator-color)', borderTop: '1px solid'}}/>

            <div className='sidebar__top'>
                <SidebarRow Icon={PeopleIcon} Title={'Friends'}/>
            </div>

            <div className='sidebar__btm'>
                <div className='dm__row'>
                    <h5>Direct Messages</h5>
                    <AddIcon fontSize='small'/>
                </div>
                
                <section className='channel__list'>
                    
                </section>
            </div>

        </div>;
}

export default FriendsSideBar;
