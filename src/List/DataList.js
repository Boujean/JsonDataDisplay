import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import MonthName from './MonthNumberToName.js'
import { ToggleDivM, ToggleDivMD, ToggleDivW } from '../Toggle_Show_button.js'
import '../App.css'
import '../Month.css'

class DataList extends Component {
  render () {
    return (
      <div>
        <h2>For {Disp_data.Years}</h2>
        <h3>Monthly Dashboard</h3>
        <ToggleDivM>
          <div className='MonthsContainer'>
            {Disp_data.Years_Features.map(function (months, index) {
        		return <div className='Months'>
          {months.Months_Features.map(function (month_details, i) {
   					return <div className='Month'>
     <h2>{MonthName((months.Months[0] + Number(i)))}</h2>
     <ToggleDivMD>
                      <div className='MonthData'>
         <h3>  Amount of people who parked within the time frame during that month</h3>
         <li>{month_details.Correct.toString()}</li>
         <h3> For an average duration of {month_details.Correct_Duration.toString()} minutes </h3>
         <h3>  people who parked longer than the allowed time</h3>
         <li>{month_details.Violators.toString()}</li>
         <h3>  Amount of people who parked less than 5mins</h3>
         <li>{month_details.Short.toString()} </li>
         <h3> For Weekly Information during this month click below</h3>
       </div>
                      <ToggleDivW>
         <div className='WeekData'>
                          <h3>More precisely for the weeks {month_details.Weeks.toString()} within this month</h3>
                          <h3> Amount of people who parked within the time frame during those weeks </h3>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l}>{weeks_details.Correct.toString()}</li>
                  		})}
                          <h3> For an average duration in minutes </h3>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l}>{weeks_details.Correct_Duration.toString()}</li>
                          })}
                          <h3> people who parked longer than the allowed time </h3>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l}>{weeks_details.Violators.toString()}</li>
                          })}
                          <h3> For an average duration in minutes </h3>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l}>{weeks_details.Violators_Duration.toString()}</li>
                          })}
                        </div>
       </ToggleDivW>
                    </ToggleDivMD>
               </div>
                })}
                 </div>
            })}
          </div>
        </ToggleDivM>
      </div>
    )
  }
}
export default DataList
