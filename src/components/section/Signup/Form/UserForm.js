import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import PrivacyDetails from './PrivacyDetails';
import Success from './Success';
import * as Constants from '../../../../constants';
import isValidBirthdate from 'is-valid-birthdate';
import { isValidPhoneNumber, formatPhoneNumberIntl, parseRFC3966 } from 'react-phone-number-input'


export class UserForm extends Component {

  state = {
    step: Constants.LOGIN_PAGE,
    birthdate: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()),
    user_name: null,
    area: null,
    email: null,
    password: null,
    phone_number: "",
    phone_extension: "+45", 
    formErrorsMessages: {
      user_name: "",
      email: "",
      password: "",
      birthdate: "",
      phone_number: ""
    },
  };

  // Proceed to the next step  
  nextStep = (e) => {
    e.preventDefault()
    if (this.state.step === 1) {
      if (isValidBirthdate(this.state.birthdate, { minAge: 18, maxAge: 100 })) {
          const date = this.state.birthdate
          const newBirthday = (date.toLocaleDateString().split("T")[0])
          console.log(date.toLocaleDateString(), newBirthday)
          this.setState({
            birthdate: newBirthday
          })

      } else {
          return(
              alert("Couldn't continue. Please check your information again.")
              );
      }
    }

      this.state.formErrorsMessages.phone_number = "";
      const { step } = this.state
      if (Constants.FORM_VALID(this.state)) {
        this.setState({
          step: step + 1,
        })

    }

    else {
      this.state.formErrorsMessages.birthdate = "Wrong birthday";
      console.log("Not valid")
  }
    
  };

  // Proceed to the previous step on back button 
  prevStep = (e) => {
    e.preventDefault()
    const { step } = this.state
    this.setState({
      step: step - 1
    })
  };

  // Handle user details with validation
  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrorsMessages = { ...this.state.formErrorsMessages };

    switch (name) {
      case "user_name":
        formErrorsMessages.user_name = Constants.NAME_CHECK(value) ? "" : "minimum 2 characters required" 
        break;
      case "email":
        formErrorsMessages.email = Constants.EMAIL_REGEX.test(value) ? "" : "invalid email address";
        break;
      case "password":
        formErrorsMessages.password = Constants.PASSWORD_CHECK.test(value) 
          ? "" 
          : "minimum 9 characters required, at least 1 digit, 1 uppercase and 1 lowercase"
        break;
      default:
        break;
    }   
    this.setState({ formErrorsMessages, [name]: value });
  };

  handleChangeDate = date => {
    console.log(date)
    if (date) {
      if (isValidBirthdate(date, { minAge: 18, maxAge: 100 })) {
        this.state.formErrorsMessages.birthdate = "";
        this.setState({
            birthdate: date
        
        });
        console.log("Valid")
      }

      else {
          this.state.formErrorsMessages.birthdate = "Wrong birthday";
          console.log("Not valid")
      }
    }
  };

  handleChangePhone = number => {
    const newNumber = number;
    if (isValidPhoneNumber(newNumber)) {
      console.log(newNumber)
        this.state.formErrorsMessages.phone_number = "";
        
        
        const formattedNum = formatPhoneNumberIntl(newNumber);
        this.setState({
            phone_number: newNumber
        });
        console.log(newNumber + "is valid!!")
    }

      else {
        console.log(newNumber + "Is not valid..");
        this.state.formErrorsMessages.phone_number = "Number not valid";
      }

  };

  handleChangeExt = extension => {
    const newExtension = extension;
    if (isValidPhoneNumber(this.state.phone_number)) {
      this.setState({
        phone_extension: newExtension
    });
  }

  };


  // Handle user privacy details
  handlePrivacy = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked})
  };

  handleSignup = () => {
    const valuesToSubmit = "hei";
  }

  render() {
    const { step, user_name, area, phone_number, birthdate, email, password, formErrorsMessages } = this.state
    const values = { user_name, area, phone_number, birthdate, email, password, formErrorsMessages}
    const { handleChange, handlePrivacy, nextStep, prevStep} = this
    // eslint-disable-next-line default-case
    switch(step) {
      case Constants.LOGIN_PAGE: 
        return (
          <FormUserDetails 
            nextStep = {this.nextStep}
            handleChange = {handleChange}
            handleChangeDate = {this.handleChangeDate}
            handleChangePhone = {this.handleChangePhone}
            handleChangeExt = {this.handleChangeExt}
            values = {values}
          />
        )
      case Constants.PRIVACY_PAGE:
        return (
          <PrivacyDetails 
            nextStep = {nextStep}
            prevStep = {prevStep}
            handlePrivacy = {handlePrivacy}
          />
        )     
      case Constants.SUCCESS_PAGE:
        return (
          <div>
            { console.log(`
              --SUBMITTING--
              ${JSON.stringify(this.state, 0, 2)}`) 
            }
            <Success
              prevStep = {prevStep}
            />

            {this.handleSignup()}
          </div>
        )
    } 
  };
}

export default UserForm;