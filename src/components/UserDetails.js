import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'

export class UserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
  render() {
      const { values, handleChange} = this.props;
    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title="Enter User Details"/>
              <TextField
              hintText="Enter first name"
              floatingLabelText="First Name"
              onChange={handleChange('firstName')}
              defaultValue={values.firstName}
              />
              <br/>
              <TextField
              hintText="Enter last name"
              floatingLabelText="Last Name"
              onChange={handleChange('lastName')}
              defaultValue={values.lastName}
              />
              <br/>
              <TextField
              hintText="Enter email"
              floatingLabelText="Email"
              type="email"
              onChange={handleChange('email')}
              defaultValue={values.email}
              />
              <br/>
               <TextField
              hintText="Enter password"
              type="password"
              floatingLabelText="Password"
              onChange={handleChange('Password')}
              defaultValue={values.password}
              /><br/>
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
export default UserDetails
