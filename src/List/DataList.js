import React, { Component } from 'react'
import Disp_data from '../Data/example_data.json'

class DataList extends Component {
  render () {
    return (
      <div>
        <h1> Hello There </h1>
        <h1>{Disp_data.Years}</h1>
        	{Disp_data.Years_Features.map((data_detail, index) => {
        		return (
          <h2>{data_detail.Months.toString()}</h2>
          )
        })}
      </div>
    )
  }
}
export default DataList
