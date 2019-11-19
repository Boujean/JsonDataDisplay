import React, { Component } from 'react'
import './App.css'
import DataList from './List/DataList'
import DataListWeekly from './List/DataListWeekly'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'> Your Parking Lot Data </header>
        <DataList />
        <DataListWeekly />
      </div>
    )
  }
}

export default App
