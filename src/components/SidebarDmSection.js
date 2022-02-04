import '../css/SidebarDmSection.css'
import { Add } from '@mui/icons-material';

export default function SidebarDmSection() {
  return <section className='sidebar-dms'>
            <div className='dm'>
                <h5>Direct Messages</h5>
                <Add fontSize='x-small'/>
            </div>
            
            <section className='channel__list'>
                
            </section>
        </section>;
}