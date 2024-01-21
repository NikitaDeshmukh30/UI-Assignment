import React from 'react'
import './MiddleSection.css'
import SearchIcon from '@material-ui/icons/Search'
import MicIcon from '@material-ui/icons/Mic';
import FilterListIcon from '@material-ui/icons/FilterList';
import { Graph } from '../Graph/Graph';
export const MiddleSection = () => {
  return (
    <div className='middle'>
        
        {/* Serch Box */}
        <div className="trends_input">
                    <SearchIcon className="trends_search" />
                    <input className="half-color-placeholder" placeholder=" Serch your question here or ask TiiA " type="text" />
                    <MicIcon className='ico'/>
                </div>

         <div className='head'> 
        <h5>Current Licence : &nbsp; &nbsp; &nbsp; <small>USD/CAD &nbsp; AUD/USD</small></h5>
          </div>


          <div className='center'>
            <div className='chart'>
             <h2>News & Data  Flow</h2>
             <ul>
              <li>5M</li>
              <li>15M</li>
              <li>30M</li>
              <li>1H</li>
              <li>2H</li>
              <li>4H</li>
              <li>All</li>
             </ul>
             <button><FilterListIcon className='threeLine'/> <small>Filter</small> <i class="fa fa-caret-down"></i></button>
            </div>
            <Graph/>
          </div>

    {/* Table Data  */}
          <div className='centerSection'>
            <div className='heading'>
              <h3>Refined News & Data Flow</h3>
            </div>
          
          <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr className='hed'>
            <th className='header'>Type</th>
            <th className='row1'>News</th>
            <th className='row2'>Score</th>
            <th className='row3'>Impact</th>
            <th className='row4'>Probability</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className='shape' ><div className='pic'></div>ERU</td>
            <td className='list'>The Euro has steadied against the US Dollar on Thursday as the<br/>market ponders the path of Fed rate hikes</td>
            <td className='list2'>+1</td>
            <td className='list1'>Neutral</td>
            <td><button>High</button></td>
          </tr>
          <tr>
            <td  className='shape'><div className='pic2'></div>INR</td>
            <td className='list'>The Euro has steadied against the US Dollar on Thursday as the<br/>market ponders the path of Fed rate hikes</td>
            <td className='list2'>+1</td>
            <td className='list1'>High</td>
            <td><button>High</button></td>
          </tr>
          <tr>
            <td  className='shape' ><div className='pic3'></div>CAD</td>
            <td className='list'>The Euro has steadied against the US Dollar on Thursday as the<br/>market ponders the path of Fed rate hikes</td>
            <td className='list2'>+1</td>
            <td className='list1'>Medium</td>
            <td><button>High</button></td>
          </tr>
          <tr>
            <td className='shape'><div className='pic3'></div>CAD</td>
            <td className='list'>The Euro has steadied against the US Dollar on Thursday as the<br/>market ponders the path of Fed rate hikes</td>
            <td className='list2'>+1</td>
            <td className='list1'>Low</td>
            <td><button>High</button></td>
          </tr>
          <tr>
            <td className='shape'><div className='pic4'></div> OIL</td>
            <td className='list'>The Euro has steadied against the US Dollar on Thursday as the<br/>market ponders the path of Fed rate hikes</td>
            <td className='list2'>+1</td>
            <td className='list1'>Neutral</td>
            <td><button>High</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
      
    </div>
  )
}
