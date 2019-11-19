import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import MonthName from './MonthNumberToName.js'
import { ToggleDivM, ToggleDivMD, ToggleDivW, ToggleDivWM } from '../Toggle_Show_button.js'
import { AllDataByMonth } from './GetArrayDataFromObject.js'
import '../App.css'
import '../Month.css'

class DataList extends Component {
  render () {
    return (
      <div>
        <h1>For {Disp_data.Years}</h1>
        <h3 className='Titlesh2' id='MonthDashboard'>Monthly Dashboard</h3>
        <ToggleDivM>
          <div className='MonthsContainer'>
            {Disp_data.Years_Features.map(function (months, index) {
              return <div className='Months'>
                {months.Months_Features.map(function (month_details, i) {
                  return <div className='Month'>
                    <p className='Titlesh2'>{MonthName((months.Months[i]))}</p>
                    <div className='MonthDisp'>
                      <ToggleDivMD>
                        <div className='MonthData'>
                          <p className='Titlesh3'>  Amount of people who parked within the time frame during that month</p>
                          <li className='map_result'>{month_details.Correct.toString()}</li>
                          <p className='Titlesh3'> For an average duration of {month_details.Correct_Duration.toString()} minutes </p>
                          <p className='Titlesh3'>  people who parked longer than the allowed time</p>
                          <li className='map_result'>{month_details.Violators.toString()}</li>
                          <p className='Titlesh3'>  Amount of people who parked less than 5mins</p>
                          <li className='map_result'>{month_details.Short.toString()} </li>
                        </div>
                      </ToggleDivMD>
                      <ToggleDivWM>
                        <div className='WeekData'>
                          <p className='Titlesh3'>Concerning weeks partly or fully within that month where data is available </p>
                          <p className='Titlesh3'> Amount of people who parked within the time frame</p>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l} className='map_result'> Week {month_details.Weeks[l]} : {weeks_details.Correct.toString()}</li>
                          })}
                          <p className='Titlesh3'> For an average duration in minutes </p>

                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l} className='map_result'>Week {month_details.Weeks[l]} : {weeks_details.Correct_Duration.toString()}</li>
                          })}
                          <p className='Titlesh3'> people who parked longer than the allowed time </p>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l} className='map_result'>Week {month_details.Weeks[l]} : {weeks_details.Violators.toString()}</li>
                          })}
                          <p className='Titlesh3'> For an average duration in minutes </p>
                          {month_details.Weeks_Features.map(function (weeks_details, l) {
                            return <li key={l} className='map_result'>Week {month_details.Weeks[l]} : {weeks_details.Violators_Duration.toString()}</li>
                          })}
                        </div>
                      </ToggleDivWM>
                    </div>
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
