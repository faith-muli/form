import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import MaskedInput from 'react-text-mask';
import MenuItem from '@material-ui/core/MenuItem';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

const genders = [
    {
      value: 'male',
      label: 'male',
    },
   
    {
      value: 'female',
      label: 'female',
    },
  ];

export class PersonalDetails extends Component {
   state={gender: 'male'}
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
   
   

  render() {
      const { values, handleChange, male, female, classes} = this.props;
    

    return (
      <MuiThemeProvider>
          
          <React.Fragment>
              <AppBar title="Step 2: Enter personal details "/>
              <br/>
            <MaskedInput
                  mask={['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                  placeholder="Enter a phone number"
                  guide={false}
                  defaultValue={values.phoneNumber}
                  onChange={handleChange('phoneNumber')}
              />
            <br/>
              <TextField
              hintText="Enter address"
              floatingLabelText="Address"
              onChange={handleChange('address')}
              defaultValue={values.address}
              />
              <br/>
              <TextField
              type="date"
              defaultValue="05-24-2019"
                onChange={handleChange('dateOfBirth')}
              defaultValue={values.dateOfBirth}
              InputLabelProps={{
                shrink: true,
              }}
              />
              <br/>
              {/* <TextField
                id="gender"
                select
                label="Select"
                defaultValue={values.gender}
                onChange={handleChange('gender')}
                SelectProps={{
                    // MenuProps: {
                    //   //className: classes.menu,
                    // },
                }}
                helperText="Please select your gender"
                >
                {genders.map(option => (
                    <MenuItem key={option.value} value={option.value}>
                    {option.label}
                    </MenuItem>
                 ))}
         </TextField> */}
         
              <FormControl component="fieldset" >
        <FormLabel component="legend">Gender</FormLabel>
        <FormGroup>
            
          <FormControlLabel
            control={<Checkbox checked={male} onChange={handleChange('gender')} defaultValue="values.gender" />}
            label="Male"
          />
          <FormControlLabel
            control={<Checkbox checked={female} onChange={handleChange('gender')} defaultValue="values.gender" />}
            label="Female"
          />
          </FormGroup>
          </FormControl>
          <br/>
            
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
    },
    menu: {
        width: 200,
      },


}
// PersonalDetails.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };

export default PersonalDetails
