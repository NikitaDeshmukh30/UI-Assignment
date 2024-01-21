import React from 'react'
import './Sidebar.css'
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone'
import CallIcon from '@material-ui/icons/Call';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faChartLine } from '@fortawesome/free-solid-svg-icons';


export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='img'>
        <img src='https://th.bing.com/th/id/OIP.BArh72OdYyiLRz5K4RUj0gHaDL?w=337&h=149&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt='' className='news'/>

    {/* Menu list */}
        <h4>MAIN MENU</h4>
        <div className='items'>
          <ul>
          <li className='focus'><img src='https://th.bing.com/th/id/OIP.0j8mXSUzV3SmFhQx98eO1QHaHa?pid=ImgDet&w=203&h=203&c=7&dpr=1.3' className='active'/>&nbsp;News Quant</li>
          <li id='economic'><FontAwesomeIcon icon={faChartLine} size="1x" color="gray" /> Economic Indicator</li>
          <li id='score'><i class="fa-regular fa-trophy"></i> One Score</li>
          <li><NotificationsNoneIcon/> Alert Central</li>    
          <li><CallIcon/> Customer Support</li>
         </ul>
        </div>
      </div>
    </div>
  )
}
