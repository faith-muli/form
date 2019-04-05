import React, { Component } from 'react'

export class Confirmation extends Component {
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep();
    }

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
    }

  render() {
    const {values :{ firstName, lastName, email, password, passwordConfirm, address, dateOfBirth, phoneNumber, gender, paymentPlan}}= this.state;
    return (
      <div>
        
      </div>
    )
  }
}

export default Confirmation
