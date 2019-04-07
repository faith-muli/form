import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import {List, ListItem }  from 'material-ui/List'
import RaisedButton from 'material-ui/RaisedButton'

export class Confirmation extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
      e.preventDefault();
      this.props.prevStep();
  }
  render() {
      const { values: { firstName, lastName, email, address, dateOfBirth, phoneNumber, gender, paymentPlan}} = this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Step 4: Confirm Details Entered"/>
              <List>
              <ListItem primaryText="First name"
                secondaryText={firstName}
              />
              <ListItem primaryText="Last name"
                secondaryText={lastName}
              />
              <ListItem primaryText="Email"
                secondaryText={email}
              />
              <ListItem primaryText="Address"
                secondaryText={address}
              />
              <ListItem primaryText="Phone Number"
                secondaryText={phoneNumber}
              />
              <ListItem primaryText="Gender"
                secondaryText={gender}
              />
              <ListItem primaryText="Date of Birth"
                secondaryText={dateOfBirth}
              />
              <ListItem primaryText="Payment Plan"
                secondaryText={paymentPlan}
              />
              
              </List>
              <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}

              />
              <RaisedButton
              label="Confirm & Submit"
              primary={true}
              style={styles.button}
              onClick={this.continue}

              />
          </React.Fragment>
      </MuiThemeProvider>
    )
  }
}
const styles ={
    button:{
        margin:15
    }

}
export default Confirmation
