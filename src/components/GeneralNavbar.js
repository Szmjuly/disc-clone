//Styling
import '../css/GeneralNavbar.css'

//Components
import GeneralHeaderNavItem from './GeneralHeaderNavItem';
import GeneralDropdownMenu from './GeneralDropdownMenu';

//Icons
import { ArrowDropDown } from '@mui/icons-material';

export default function GeneralNavbar() {
  return <ul className='header-nav'>
            <GeneralHeaderNavItem icon={<ArrowDropDown/>}>
              <GeneralDropdownMenu />
            </GeneralHeaderNavItem>
        </ul>;
}