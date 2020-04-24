import React from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import '../../../../scss/modules/_signup.scss';
const FormUserDetails = ( {values, handleChange, nextStep, handleChangeDate} ) => {
  
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
            <input
              id="input-form-name"
              className={values.formErrorsMessages.name.length > 0 ? "error" : "correct"}
              placeholder="Name *"
              autoComplete="current-name"
              type="text"
              name="name"
              noValidate
              onChange={handleChange}
              defaultValue={values.name}
            />
            {values.formErrorsMessages.name.length > 0 && (
              <span className="errorMessage">{values.formErrorsMessages.name}</span>
            )}
          </div>
          <div className="birth_date">
            <DatePicker
                selected={values.birthDate}
                id="input-form-birthday"
                placeholder="Birthday"
                autoComplete="birthdate"
                type="date"
                name="birthday"
                onChange={handleChangeDate}
                defaultValue={values.birthDate}
                showYearDropdown={true}
                showMonthDropdown={true}
                minDate={new Date(1920, 1, 1)}
                
            />
            {values.formErrorsMessages.birthday.length > 0 && (
            console.log(values.formErrorsMessages.birthday),
              <span className="errorMessage">{values.formErrorsMessages.birthday}</span>
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