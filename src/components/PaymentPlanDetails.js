import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton'
import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

export class PaymentPlanDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
      const { values, handleChange, classes, monthly, yearly} = this.props;
    

    return (
      <MuiThemeProvider>
          <React.Fragment>
              <AppBar title=" Step 3: Payment plan details"/>
              <FormControl component="fieldset" >
        <FormLabel component="legend">Payment Plan</FormLabel>
        <FormGroup>
            
          <FormControlLabel
            control={<Checkbox checked={monthly} onChange={handleChange('paymentPlan')} defaultValue="values.paymentPlan" />}
            label="Monthly"
          />
          <FormControlLabel
            control={<Checkbox checked={yearly} onChange={handleChange('paymentPlan')} defaultValue="values.paymentPlan" />}
            label="Yearly"
          />
          </FormGroup>
          </FormControl>
            
               <br/>
              <RaisedButton
              label="Back"
              primary={true}
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

export default PaymentPlanDetails
