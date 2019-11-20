import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import MonthName from './MonthNumberToName.js'
import { ToggleDivW } from '../Toggle_Show_button.js'
import { AllDataByWeek } from './GetArrayDataFromObject.js'
import '../App.css'
import '../Week.css'
import '../Month.css'

class DataListWeekly extends Component {
  render () {
    return (
      <div>
        <h2 className='Titlesh2' id='WeekDashboard'>Weekly Dashboard</h2>
        <ToggleDivW>
          {Disp_data.Years_Features.map(function (months, index) {
            return <div className='WeeklyData_month' key={index.toString()}>
              <div className='WeeksContainer'>
                {months.Months_Features.map(function (month_details, i) {
                  return <div className='WeekofMonth' key={month_details.Weeks_Features.toString()}>
                    <h3 className='Titlesh3'>{MonthName((months.Months[0] + Number(i)))}</h3>
                    <div className='WeeklyData'>
                      {month_details.Weeks_Features.map(function (weeks_details, l) {
                        return <div className='Data' key={weeks_details.Correct.toString()}>
                          <h3 className='table_desc'> Week {month_details.Weeks[Number(l)].toString()}</h3>
                          <h3 className='table_desc'> Amount of Correct Time </h3>
                          <li key={weeks_details.Correct.toString()} className='table_data'>{weeks_details.Correct.toString()}</li>
                          <h3 className='table_desc'> Average duration (min) </h3>
                          <li key={weeks_details.Correct_Duration.toString()} className='table_data'>{weeks_details.Correct_Duration.toString()}</li>
                          <h3 className='table_desc'> Amount of Exceded Parking </h3>
                          <li key={(weeks_details.Violators + weeks_details.Correct_Duration + weeks_details.Correct).toString()} className='table_data'>{weeks_details.Violators.toString()}</li>
                          <h3 className='table_desc'> Average duration (min) </h3>
                          <li key={weeks_details.Violators_Duration.toString()} className='table_data'>{weeks_details.Violators_Duration.toString()}</li>
                               </div>
                      })}
                    </div>
                         </div>
                })}
              </div>
                   </div>
          })}
        </ToggleDivW>
      </div>
    )
  }
}
export default DataListWeekly
