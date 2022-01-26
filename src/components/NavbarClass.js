import React from 'react';
import '../css/Navbar.css'
import HomeIcon from '@mui/icons-material/Home';

export default class Navbar extends React.Component {
  constructor(props){
    super(props);
  }

  componentDidMount(){
   const listener = document.querySelector('#home');
   const tooltip = document.querySelector('#tooltip');
   listener.addEventListener('mouseenter', showTooltip, false);
   function showTooltip(){
      tooltip.removeAttribute('hidden', '');
   }

   listener.addEventListener('mouseleave', hideTooltip, false);
   function hideTooltip(){
    tooltip.setAttribute('hidden', '');
   }
  }
  
  render() {
    return (<div className='navbar'>
            <div className='nav-wrapper'>            
              <button id='home' className='nav-icon'>
                <HomeIcon />
              </button>
              <div id='tooltip' className='tooltip' hidden>
                Home
              </div>
            </div>
          </div>);
  }
}