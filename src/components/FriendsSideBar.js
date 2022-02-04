//Styling
import '../css/Sidebar.css'

//Icons
import {People} from '@mui/icons-material';

//Components
import SidebarUserInfo from './SidebarUserInfo';
import SidebarRow from './SidebarRow';
import SidebarSearchBar from './SidebarSearchBar';
import SidebarDmSection from './SidebarDmSection';

//Redux
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';


export default function FriendsSideBar() {
    const currentUser = useSelector(selectUser);

    return <section className='sidebar'>

                <header className='sidebar-friends-header'>
                    <SidebarSearchBar />
                    <SidebarRow Icon={People} Title={'Friends'}/>
                </header>

                <SidebarDmSection />

                <footer className='sidebar-footer'>
                    <SidebarUserInfo displayName={currentUser.displayName} avatar={currentUser.photo} uid={currentUser.uid}/>
                </footer>

            </section>;
}
