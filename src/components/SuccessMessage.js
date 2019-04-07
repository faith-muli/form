import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class SuccessMessage extends Component {
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
}
back = e => {
  e.preventDefault();
  this.props.prevStep();
}
  render() {
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Success Page"/>
              <h1>Your details have been submitted successfully.</h1>
              <h3>Thank you.</h3>
          </React.Fragment>
       </MuiThemeProvider>
    )
  }
}

export default SuccessMessage
