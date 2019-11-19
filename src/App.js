import React, { Component } from 'react'
import './App.css'
import DataList from './List/DataList'
import DataList_Weekly from './List/DataList_weekly'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'> Your Parking Lot Data </header>
        <DataList />
        <DataList_Weekly />
      </div>
    )
  }
}

export default App
