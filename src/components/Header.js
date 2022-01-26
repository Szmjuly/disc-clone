import React from 'react';
import '../css/Header.css'

export default function Header({Icon, pageName, navbar, item1, item2, item3, item4, addFriend, isChatName}) {
  return <div className='friends__header'>

            <div className='page__name'>
                {Icon && <Icon />}
                <h3>{isChatName === 1 && <h3>@</h3>}{pageName}</h3>
                <hr />
            </div>

            { (navbar === 1) && <ul className='friends__navbar'>
                                <li className='active'><h5 href='#'>{item1}</h5></li>
                                <li><h5 href='#'>{item2}</h5></li>
                                <li><h5 href='#'>{item3}</h5></li>
                                <li><h5 href='#'>{item4}</h5></li>
                                { (addFriend === 1) && <li><h5 id='addFriend' href='#'>Add Friend</h5></li> }
                            </ul>
            }
                
        </div>;
}