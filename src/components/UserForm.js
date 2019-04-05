import React, { Component } from 'react'


import {UserDetails} from './UserDetails'
import PersonalDetails from './PersonalDetails';
import PaymentPlanDetails from './PaymentPlanDetails';
import Confirmation from './Confirmation';
import SuccessMessage from './SuccessMessage';


export class UserForm extends Component {
   state ={
        step :1,
        firstName: '',
        lastName: '',
        email:'',
        password: '',
        passwordConfirm: '',
        address: '',
        dateOfBirth: '',
        phoneNumber: '',
        gender: '',
        paymentPlan:''
    }

    //next step
    nextStep = () =>{ 
        const {step} = this.state;
        this.setState({step: step + 1
        });
    }

    //go back to the next step
    prevStep = () =>{ 
        const {step} = this.state;
        this.setState({step: step - 1
        });
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
    }

  render() {
    const {step} = this.state;
    const { firstName, lastName, email, password, passwordConfirm, address, dateOfBirth, phoneNumber, gender, paymentPlan}= this.state;
    const values = { firstName, lastName, email, password, passwordConfirm, address, dateOfBirth, phoneNumber, gender, paymentPlan}
    switch (step){
        case 1:
            return <UserDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 2:
            return <PersonalDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 3:
            return <PaymentPlanDetails
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange = {this.handleChange}
                    values={values}
                    />
        case 4:
            return <Confirmation
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    values={values}
                    />
        case 5:
            return <SuccessMessage />
    }
    return (
      <div>
        
      </div>
    )
  }
}

export default UserForm
