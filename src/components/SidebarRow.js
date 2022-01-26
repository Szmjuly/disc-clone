import '../css/Sidebar.css'

export default function SidebarRow({Icon, Title}) {
  return <div className='sidebar__row'>
            {Icon && <Icon />}
            {Title && <h2>{Title}</h2>}
        </div>;
}
