//Styling
import { Call, SignalCellularAlt } from '@mui/icons-material';
import '../css/SidebarVoiceConnected.css'

export default function SidebarVoiceConnected() {
  return <div className='sidebar__vc'>
        <SignalCellularAlt className='vc-connect-icon' fontSize='large' />
            <div className='sidebar__vc-info'>
                <h3>Voice Connected</h3>
                <p>Stream</p>
            </div>
            <div className='sidebar__vc-icons'>
                <Call />
            </div>
        </div>;
}