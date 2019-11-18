import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import MonthName from './MonthNumberToName.js'
import ToggleDiv from '../Toggle_Show_button.js'

class DataList extends Component {
  render () {
    return (
      <div>
        <h1> Your Parking Lot Data </h1>
        <h2>For {Disp_data.Years}</h2>
        <ToggleDiv>
          {Disp_data.Years_Features.map(function (months, index) {
        		return <div>
              {months.Months_Features.map(function (month_details, i) {
   					return <div>
                  <h2>{MonthName((months.Months[0] + Number(i)))}</h2>
                  <ToggleDiv>
       <h3>  Amount of people who parked within the time frame during that month</h3>
       <li>{month_details.Correct.toString()}</li>
       <h3> For an average duration of {month_details.Correct_Duration.toString()} minutes </h3>
       <h3>  people who parked longer than the allowed time</h3>
       <li>{month_details.Violators.toString()}</li>
       <h3>  Amount of people who parked less than 5mins</h3>
       <li>{month_details.Short.toString()} </li>
       <h3> More precisely for the weeks {month_details.Weeks.toString()} within this month</h3>
       <ToggleDiv>
                      <h3> Amount of people who parked within the time frame during those weeks </h3>
                      {month_details.Weeks_Features.map(function (weeks_details, l) {
                        return <li key={l}>{weeks_details.Correct.toString()}</li>
                  		})}
                      <h3> people who parked longer than the allowed time </h3>
                      {month_details.Weeks_Features.map(function (weeks_details, l) {
                        return <li key={l}>{weeks_details.Violators.toString()}</li>
                      })}
                    </ToggleDiv>
     </ToggleDiv>
               </div>
              })}
                 </div>
          })}
        </ToggleDiv>
      </div>
    )
  }
}
export default DataList
