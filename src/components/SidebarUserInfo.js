//Styling
import '../css/SidebarUserInfo.css'

//Icons
import {Mic, Headphones, Settings} from '@mui/icons-material'

//Compoenets
import {Avatar} from '@mui/material'

export default function SidebarUserInfo(props) {
    return <footer className='sidebar-userInfo'>
                <Avatar src={props.avatar}/>
                <div className='sidebar-userInfo-profile'>
                    {props.displayName ? <h3>@{props.displayName}</h3> : <h3>No Name!</h3>}
                    {props.uid ? <h6>#{props.uid.substring(0, 5)}</h6> : <h6>#0000</h6>}
                </div>

                <div className='sidebar-userInfo-icons'>
                    <Mic fontSize='small'/>
                    <Headphones fontSize='small'/>
                    <Settings fontSize='small'/>
                </div>
            </footer>
        ;
}