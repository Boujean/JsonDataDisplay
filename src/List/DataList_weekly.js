import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import MonthName from './MonthNumberToName.js'
import { ToggleDiv, ToggleDivM, ToggleDivMD, ToggleDivW } from '../Toggle_Show_button.js'
import '../App.css'

class DataList_Weekly extends Component {
  render () {
    return (
      <div>
        <h3>Weekly Dashboard</h3>
        <ToggleDivW>
          {Disp_data.Years_Features.map(function (months, index) {
            return <div className='WeeklyData_month'>
              {months.Months_Features.map(function (month_details, i) {
                return <div className='WeeklyData'>
                  {month_details.Weeks_Features.map(function (weeks_details, l) {
                    return <div className='Data'>
                      <h3 className='table_desc'> Week {month_details.Weeks[Number(l)].toString()}</h3>
                      <h3 className='table_desc'> Amount of Correct Time </h3>
                      <li key={l} className='table_data'>{weeks_details.Correct.toString()}</li>
                      <h3 className='table_desc'> Average duration (min) </h3>
                      <li key={l} className='table_data'>{weeks_details.Correct_Duration.toString()}</li>
                      <h3 className='table_desc'> Amount of Exceded Parking </h3>
                      <li key={l} className='table_data'>{weeks_details.Violators.toString()}</li>
                      <h3 className='table_desc'> Average duration (min) </h3>
                      <li key={l} className='table_data'>{weeks_details.Violators_Duration.toString()}</li>
                           </div>
                  })}
                       </div>
              })}
                   </div>
          })}
        </ToggleDivW>
      </div>
    )
  }
}
export default DataList_Weekly
