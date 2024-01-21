import React from 'react'
import './MainSection.css'
import { Sidebar } from '../Sidebar/Sidebar'
import { MiddleSection } from '../MiddleSection/MiddleSection'
import {RightSidebar} from '../RightSidebar/RightSidebar'
export const MainSection = () => {
  return (
    <div className='main'>
      
      {/* Main contain */}
      <Sidebar/>
      <MiddleSection/>
      <RightSidebar/>
    </div>
  )
}
