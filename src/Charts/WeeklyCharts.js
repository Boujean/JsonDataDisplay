import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import { AllDataByMonth, AllDataByWeek } from '../List/GetArrayDataFromObject.js'
import { ToggleDivW, ToggleDivCC, ToggleDivCCD, ToggleDivCS, ToggleDivCV, ToggleDivCVD } from '../Toggle_Show_button.js'
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import '../App.css'
import '../Month.css'
import '../Charts.css'

class WeeklyDataCharts extends Component {
  render () {
    return (
      <div className='Chart'>
        <h2 className='Titlesh2' id='MonthCharts'>Weekly Charts</h2>
        <ToggleDivW>
          <div className='ChartContainer'>
            {Disp_data.Years_Features.map(function (months, index) {
              return <div className='MonthsContainer' key='index'>
                <div className='WeekofMonth' key={months.Months_Features.toString()}>
                  <div className='Charts'>
                    <ToggleDivCC>
                      <div className='MonthData'>
                        <ResponsiveContainer height={300} width='80%'>
                          <BarChart data={AllDataByWeek(months.Months, months.Months_Features)} margin-right='10px'>
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Bar type='monotone' barSize={50} dataKey='Correct' fill='#74F288' />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </ToggleDivCC>
                    <ToggleDivCCD>
                      <div className='MonthData'>
                        <ResponsiveContainer height={300} width='80%'>
                          <BarChart data={AllDataByWeek(months.Months, months.Months_Features)} margin-right='10px'>
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Bar type='monotone' barSize={50} dataKey='Correct_Duration' fill='#74F288' />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </ToggleDivCCD>
                    <ToggleDivCV>
                      <div className='MonthData'>
                        <ResponsiveContainer height={300} width='80%'>
                          <BarChart data={AllDataByWeek(months.Months, months.Months_Features)}>
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Bar type='monotone' barSize={50} dataKey='Violators' fill='#74F288' />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </ToggleDivCV>
                    <ToggleDivCVD>
                      <div className='MonthData'>
                        <ResponsiveContainer height={300} width='80%'>
                          <BarChart data={AllDataByWeek(months.Months, months.Months_Features)}>
                            <CartesianGrid stroke='#ccc' />
                            <XAxis dataKey='name' />
                            <YAxis />
                            <Tooltip />
                            <Bar type='monotone' barSize={50} dataKey='Violators_Duration' fill='#74F288' />
                          </BarChart>
                        </ResponsiveContainer>
                      </div>
                    </ToggleDivCVD>
                  </div>
                </div>
                     </div>
            })}
          </div>
        </ToggleDivW>
      </div>
    )
  }
}
export default WeeklyDataCharts
