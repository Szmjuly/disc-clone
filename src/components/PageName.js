//Styling
import '../css/PageName.css'

export default function PageName({Icon, isChannelName, title}) {
  return <header className='header__title'>
            {Icon && <Icon />}
            <h3>{isChannelName && <h3>@</h3>}{title}</h3>
        </header>;
}