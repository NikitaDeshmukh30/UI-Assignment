import React from 'react'
import './RightSidebar.css'
export const RightSidebar = () => {
  return (
    <div className='rightSidebar'>
     <div className='Section'>
      <img src='https://th.bing.com/th/id/OIP.wGiAQOnYWltoDGblew8bOQAAAA?pid=ImgDet&w=168&h=177&c=7&dpr=1.3' alt=''/>  &nbsp;  &nbsp; 
      <img src='https://th.bing.com/th/id/OIP.cpKBWEQFTt-cuMUI_WINuQHaGu?w=225&h=204&c=7&r=0&o=5&dpr=1.3&pid=1.7' alt=''/>  &nbsp;  &nbsp;  &nbsp; 
      <p>Username</p> 
      <p className='arrow'>▼</p>
     </div>

     <div className='text'>
     <h2>Welcome, Username</h2>
      <p>Good to see you again!</p>
     </div>

     <div className='boxSize'>
            <div className='small'>
            <h4>Average Score</h4>
            </div>
   
      <div className='mid'>
      <div className="circle-wrap">
    <div className="circle">
      <div className="mask full-1">
        <div className="fill-1"></div>
      </div>
      <div className="mask half">
        <div className="fill-1"></div>
      </div>
      <div className="inside-circle"> 75 </div>
    </div>
  </div>
       <div className='info'>
        <h3>75%</h3>
        <p>about graph</p>
        <h5>See Detail &nbsp; <small><i class="fa fa-angle-right"></i></small></h5>
        
       </div>
  </div>
</div>

     {/* Chart */}
       <div className='centerSection1'>
<h4>Top 10 Focus Topics</h4>
<div className="grid-container">
       
        <div className="grid-item">1. &nbsp;  Focus Topic 1</div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">2. &nbsp; Focus Topic 2</div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">3. &nbsp;  Focus Topic 3 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">4. &nbsp; Focus Topic 4 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">5. &nbsp;  Focus Topic 5 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">6. &nbsp;  Focus Topic 6 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">7. &nbsp; Focus Topic 7 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">8. &nbsp; Focus Topic 8 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item">9. &nbsp; Focus Topic 9 </div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item1">10.&nbsp; Focus Topic 10</div>
        <div className="grid-item"></div>
        <div className="grid-item button">Score 1</div>
        <div className="grid-item2">See all &nbsp; <small><i class="fa fa-angle-right"></i></small></div>
    </div>
       </div>
   

    </div>
  )
}
