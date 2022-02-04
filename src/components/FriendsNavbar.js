//Styling
import '../css/FriendsNavbar.css'

export default function FriendsNavbar() {
  return <ul className='friends__navbar'>
            <li className='active'><h5 href='#'>Online</h5></li>
            <li><h5 href='#'>All</h5></li>
            <li><h5 href='#'>Pending</h5></li>
            <li><h5 href='#'>Blocked</h5></li>
            <li id='addFriend'><h5 href='#'>Add Friend</h5></li>
        </ul>;
}