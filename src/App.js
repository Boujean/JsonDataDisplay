import React, { Component } from 'react'
import './App.css'
import DataList from './List/DataList'
import DataListWeekly from './List/DataListWeekly'
import DataCharts from './Charts/Charts.js'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <div className='navbar'>
          <a href='#MonthDashboard'>Monthly Dashboard</a>
          <a href='#WeekDashboard'>Weekly Dashboard</a>
          <a href='#MonthCharts'>Monthly Charts</a>
          <a href='#Contact'>Contact</a>
        </div>
        <header className='App-header'> Your Parking Lot Data </header>
        <DataList />
        <DataListWeekly />
        <DataCharts />
        <footer id='Contact'>Contact me at jean.puigrenier@telecom-sudparis.eu</footer>
      </div>
    )
  }
}

export default App
