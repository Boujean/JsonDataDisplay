import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'
import MonthName from '../List/MonthNumberToName.js'
import { AllDataByMonth } from '../List/GetArrayDataFromObject.js'
import { ToggleDivM, ToggleDivCC, ToggleDivCCD, ToggleDivCS, ToggleDivCV, ToggleDivCVD } from '../Toggle_Show_button.js'
import { ResponsiveContainer, BarChart, Bar, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts'
import '../App.css'
import '../Month.css'
import '../Charts.css'

class DataCharts extends Component {
  render () {
    return (
      <div>
        <h2 className='Titlesh2'>Monthly Charts</h2>
        <ToggleDivM>
          <div className='ChartContainer'>
            {Disp_data.Years_Features.map(function (months, index) {
              return <div className='MonthsContainer'>
                <div className='Charts'>
                  <ToggleDivCC>
                    <div className='MonthData'>
                      <ResponsiveContainer height={300} width='80%'>
                        <BarChart data={AllDataByMonth(months.Months, months.Months_Features)} margin-right='10px'>
                          <CartesianGrid stroke='#ccc' />
                          <XAxis dataKey='name' />
                          <YAxis />
                          <Tooltip />
                          <Bar type='monotone' barSize='{50}' dataKey='Correct' fill='#74F288' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </ToggleDivCC>
                  <ToggleDivCCD>
                    <div className='MonthData'>
                      <ResponsiveContainer height={300} width='80%'>
                        <BarChart data={AllDataByMonth(months.Months, months.Months_Features)} margin-right='10px'>
                          <CartesianGrid stroke='#ccc' />
                          <XAxis dataKey='name' />
                          <YAxis />
                          <Tooltip />
                          <Bar type='monotone' barSize='{50}' dataKey='Correct_Duration' fill='#74F288' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </ToggleDivCCD>
                  <ToggleDivCV>
                    <div className='MonthData'>
                      <ResponsiveContainer height={300} width='80%'>
                        <BarChart data={AllDataByMonth(months.Months, months.Months_Features)}>
                          <CartesianGrid stroke='#ccc' />
                          <XAxis dataKey='name' />
                          <YAxis />
                          <Tooltip />
                          <Bar type='monotone' barSize='{50}' dataKey='Violators' fill='#74F288' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </ToggleDivCV>
                  <ToggleDivCVD>
                    <div className='MonthData'>
                      <ResponsiveContainer height={300} width='80%'>
                        <BarChart data={AllDataByMonth(months.Months, months.Months_Features)}>
                          <CartesianGrid stroke='#ccc' />
                          <XAxis dataKey='name' />
                          <YAxis />
                          <Tooltip />
                          <Bar type='monotone' barSize='{50}' dataKey='Violators_Duration' fill='#74F288' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </ToggleDivCVD>
                  <ToggleDivCS>
                    <div className='MonthData'>
                      <ResponsiveContainer height={300} width='80%'>
                        <BarChart data={AllDataByMonth(months.Months, months.Months_Features)}>
                          <CartesianGrid stroke='#ccc' />
                          <XAxis dataKey='name' />
                          <YAxis />
                          <Tooltip />
                          <Bar type='monotone' barSize='{50}' dataKey='Short' fill='#74F288' />
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                  </ToggleDivCS>
                </div>
                     </div>
            })}
          </div>
        </ToggleDivM>
      </div>
    )
  }
}
export default DataCharts
