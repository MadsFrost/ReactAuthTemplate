import React from 'react';
import useForm from "./useForm";
import validate from './LoginFormValidationRules';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from "react-router-dom";
import { loggedon } from "../../../store/actions/index";
import "../../../scss/base/_section.scss";

const UserAuthForm = () => {
  const {
    values,
    errors,
    handleChange,
    handleSubmit,
  } = useForm(login, validate);

  const toggleLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  function login() {
  
      console.log('No errors, submit callback called!');
      
      if (toggleLogged) {
        return <Redirect to="/"/>;
      }
  };

  return (
    <div className="section is-fullheight">
      <div className="container">
        <div>
          <h1 className="sectionHeader">Login</h1>
            <form onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label className="label">Email Address</label>
                <div className="control">
                  <input autoComplete="off" className={`input ${errors.email && 'is-danger'}`} type="email" name="email" onChange={handleChange} value={values.email || ''} required />
                  {errors.email && (
                    <p className="help is-danger">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="field">
                <label className="label">Password</label>
                <div className="control">
                  <input className={`input ${errors.password && 'is-danger'}`} type="password" name="password" onChange={handleChange} value={values.password || ''} required />
                </div>
                {errors.password && (
                  <p className="help is-danger">{errors.password}</p>
                )}
              </div>
              <button type="submit" className="button is-block is-info is-fullwidth" onClick={() => dispatch(loggedon())}>Login</button>
            </form>
        </div>
      </div>
    </div>
  );
};

export default UserAuthForm;