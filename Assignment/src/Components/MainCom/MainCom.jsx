import React from 'react'
import './MainCom.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { CenterSection } from '../CenterSection/CenterSection'
import {RightSidebar} from '../RightSidebar/RightSidebar'
export const MainCom = () => {
  return (
    <div className='main'>
      
      {/* Main Section*/}
      <Sidebar/>
      <CenterSection/>
      <RightSidebar/>
    </div>
  )
}
