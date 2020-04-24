import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import PrivacyDetails from './PrivacyDetails';
import Success from './Success';
import * as Constants from '../../../../constants';
import isValidBirthdate from 'is-valid-birthdate';
import { isValidPhoneNumber } from 'react-phone-number-input'

export class UserForm extends Component {

  state = {
    step: Constants.LOGIN_PAGE,
    birthDate: new Date(1990, 1, 1),
    name: null,
    area: null,
    email: null,
    password: null,
    phoneNumber: null,
    formErrorsMessages: {
      name: "",
      email: "",
      password: "",
      birthday: "",
      phone: ""
    },
    comTrayProduct: false,
    comOtherProducts: false
  };

  // Proceed to the next step  
  nextStep = (e) => {
    e.preventDefault()
    const { step } = this.state
    if (Constants.FORM_VALID(this.state)) {
      this.setState({
        step: step + 1
      })
    } else {
      return(
          alert("Couldn't continue. Please check your information again.")
          );
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
      case "name":
        formErrorsMessages.name = Constants.NAME_CHECK(value) ? "" : "minimum 2 characters required" 
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
    if (isValidBirthdate(date, { minAge: 18, maxAge: 100 })) {
        this.state.formErrorsMessages.birthday = "";
        this.setState({
            birthDate: date
        });
    console.log("Valid")
    }

    else {
        this.state.formErrorsMessages.birthday = "Wrong birthday";
        console.log("Not valid")
    }
  };

  handleChangePhone = number => {
    if (isValidPhoneNumber(number)) {
      console.log(number)
        this.state.formErrorsMessages.phone = "";
        this.setState({
            phoneNumber: number
        });
        console.log(number + "is valid!!")
    }

      else {
        console.log(number + "Is not valid..");
        this.state.formErrorsMessages.phone = "Number not valid";
      }

  };

  // Handle user privacy details
  handlePrivacy = name => e => {
    this.setState({ ...this.state, [name]: e.target.checked})
  };

  render() {
    const { step, name, area, phoneNumber, birthDate, email, password, formErrorsMessages } = this.state
    const values = { name, area, phoneNumber, birthDate, email, password, formErrorsMessages, area }
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
          </div>
        )
    } 
  }
};

export default UserForm;