
import React, { Component } from 'react'
import './App.css'

export class ToggleDiv extends Component {
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
          <div className='boxContent'>
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
      title = 'Hide this month data'
    } else {
      title = 'Get this month data'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
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
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivWM extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide weekly data for this month'
    } else {
      title = 'Get weekly data for this month'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivCC extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Correct Chart'
    } else {
      title = 'Get Correct Chart'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivCCD extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Correct Duration Chart'
    } else {
      title = 'Get Correct Duration Chart'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivCV extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Violators Chart'
    } else {
      title = 'Get Violators Chart'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivCVD extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Violators Duration Chart'
    } else {
      title = 'Get Violators Duration Chart'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
export class ToggleDivCS extends ToggleDiv {
  render () {
    var { title, children } = this.props
    const { opened } = this.state

    if (opened) {
      title = 'Hide Short Chart'
    } else {
      title = 'Get Short Chart'
    }
    return (
      <div className='box'>
        <div className='boxTitle' onClick={this.toggleBox}>
          {title}
        </div>
        {opened && (
          <div className='boxContent'>
            {children}
          </div>
        )}
      </div>
    )
  }
}
