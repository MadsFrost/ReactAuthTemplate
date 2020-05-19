import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../../scss/modules/_signup.scss';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import flags from 'react-phone-number-input/flags';
import { isValidPhoneNumber } from 'react-phone-number-input';


const FormUserDetails = ( {values, handleChange, nextStep, handleChangeDate, handleChangePhone} ) => {

  return (
    
    <div className="wrapper">
      <div className="form-wrapper">
        <div className='page-detail'>
          <h3 className="alignleft">User Details</h3>
          <p className="aligncenter">Privacy</p>
          <p className="alignright">Done</p>
        </div>
        <form noValidate className="form">
          <div className="name">
          <label htmlFor="" style={{display: "none"}}>hidden label to mislead chrome autocomplete</label>
            <input
              id="input-form-name"
              autoComplete="cc-name"
              className={values.formErrorsMessages.user_name.length > 0 ? "error" : "correct"}
              placeholder="Name *"
              type="text"
              name="user_name"
              noValidate
              onChange={handleChange}
              defaultValue={values.user_name}
            />
            {values.formErrorsMessages.user_name.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.user_name}</span>
            )}
          </div>
          <div className="birth_date">
            <DatePicker
                selected={values.birthdate}
                id="input-form-birthdate"
                placeholder="Birthday"
                autoComplete="birthdate"
                type="date"
                name="birthdate"
                onChange={handleChangeDate}
                defaultValue={values.birthdate}
                showYearDropdown={true}
                showMonthDropdown={true}
                scrollableYearDropdown={true}
                minDate={new Date(1920, 1, 1)}
                
            />
            {values.formErrorsMessages.birthdate.length > 0 && (
            console.log(values.formErrorsMessages.birthdate),
              <span className="errorMessage">{values.formErrorsMessages.birthdate}</span>
            )}
          </div>
          <div className="email">
            <input
              id="input-form-email"
              className={values.formErrorsMessages.email.length > 0 ? "error" : "correct"}
              placeholder="Email *"
              autoComplete="current-email"
              type="email"
              name="email"
              onChange={handleChange}
              defaultValue={values.email}
            />
            {values.formErrorsMessages.email.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.email}</span>
            )}
          </div>
          <div className="password">
            <input
              id="input-form-password"
              className={values.formErrorsMessages.password.length > 0 ? "error" : "correct"}
              placeholder="Password *"
              autoComplete="current-password"
              type="password"
              name="password"
              onChange={handleChange}
              defaultValue={values.password}
            />
            {values.formErrorsMessages.password.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.password}</span>
            )}
          </div>
          <div className="phoneNumber">
            <PhoneInput
              flags={flags}
              defaultCountry="DK"
              className={isValidPhoneNumber(values.phone_extension + values.phone_number)? "correct":"error"}
              id="input-form-phoneNumber"
              placeholder="Phone Number *"
              autoComplete="current-phone"
              type="text"
              name="phone_number"
              onChange={handleChangePhone}
              value={values.phone_extension + values.phone_number}
            />
            {values.formErrorsMessages.password.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.password}</span>
            )}
          </div>
          <div className="areaCode">
            <input
              id="input-form-areacode"
              className={values.formErrorsMessages.password.length > 0 ? "error" : "correct"}
              placeholder="Areacode *"
              autoComplete="current-areacode"
              type="number"
              name="area"
              onChange={handleChange}
              defaultValue={values.area}
            />
            {values.formErrorsMessages.password.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.password}</span>
            )}
          </div>
          
          <button 
            type="submit" 
            id='btn-next' 
            onClick={nextStep}
          >
            Next
          </button>
        </form>
        <br/>
        <small><i>Fields marked with * are required</i></small>
      </div>
    </div>  
  )
};
    

export default FormUserDetails;