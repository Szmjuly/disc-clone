import '../css/Sidebar.css'
import SidebarRow from './SidebarRow';
import PeopleIcon from '@mui/icons-material/People';
import AddIcon from '@mui/icons-material/Add';

function SideBar() {
  return <div className='sidebar'>
            <div className='sidebar__search'>
                <input type={'text'} placeholder='Search for Someone'/>
            </div>

            <hr style={{color: '#2b2e33', borderTop: '1px solid'}}/>

            <div className='sidebar__top'>
                <SidebarRow Icon={PeopleIcon} Title={'Friends'}/>
            </div>

            <div className='sidebar__btm'>
                <div className='dm__row'>
                    <h5>Direct Messages</h5>
                    <AddIcon fontSize='small'/>
                </div>
                <SidebarRow />
            </div>

        </div>;
}

export default SideBar;
