import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class PersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const { values, handleChange} = this.props;

    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Enter personal details "/>
              <TextField
              hintText="Enter address"
              floatingLabelText="address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              />
              <br/>
              <TextField
              hintText="Enter Date of birth"
              floatingLabelText="Date of Birth"
              onChange={handleChange('dateOfBirth')}
              defaultValue={values.dateOfBirth}
              />
              <br/>
              <TextField
              hintText="Enter phone number"
              floatingLabelText="Phone number"
              onChange={handleChange('phoneNumber')}
              defaultValue={values.phoneNumber}
              />
              <br/>
               <TextField
              hintText="Enter gender"
              floatingLabelText="gender"
              onChange={handleChange('gender')}
              defaultValue={values.gender}
              /><br/>
              <RaisedButton
              label="Back"
              primary={false}
              style={styles.button}
              onClick={this.back}

              />
              <RaisedButton
              label="Next"
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

export default PersonalDetails
