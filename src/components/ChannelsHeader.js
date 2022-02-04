//Styling
import '../css/ChannelsHeader.css'

//Icons
import { Add, ExpandMore } from '@mui/icons-material';

export default function ChannelsHeader({title, expanded, setExpanded, onClick}) {
    function handleExpand(){
        setExpanded(!expanded);
    } 
    return <header className='channel__list-header'>
                <div onClick={handleExpand}><h5>{(expanded) ? <ExpandMore className='rotateSvg'/> : <ExpandMore />}{title}</h5></div>
                <button className='addChannelBtn' onClick={onClick}><Add /></button>
            </header>;
}