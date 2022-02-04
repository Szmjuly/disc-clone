//Styling
import '../css/Sidebar.css'

//Components
import SidebarUserInfo from './SidebarUserInfo';
import ServerTitle from './ServerTitle';
import ServerChannels from './ServerChannels';
import SidebarVoiceConnected from './SidebarVoiceConnected';

//Redux Stuff
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

export default function ServerSideBar() {
    const currentUser = useSelector(selectUser);

    return <section className='sidebar'>
              <header>
                <ServerTitle />
                <ServerChannels />
              </header>

              <footer>
                <SidebarVoiceConnected />
                <SidebarUserInfo displayName={currentUser.displayName} avatar={currentUser.photo} uid={currentUser.uid}/>
              </footer>
          </section>;
}
