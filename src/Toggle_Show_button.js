import React, { Component } from 'react'
import './App.css'

export class ToggleDiv extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      opened: false
    }
    this.toggleBox = this.toggleBox.bind(this)
  }

  toggleBox () {
    const { opened } = this.state
    this.setState({
      opened: !opened
    })
  }
}

export class ToggleDivM extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Available Month'
    } else {
      title = 'Show Available Month'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div class='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}

export class ToggleDivMD extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Monthly Data'
    } else {
      title = 'Get Monthly Data'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div class='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivW extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Weekly Data'
    } else {
      title = 'Get Weekly Data'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div class='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
