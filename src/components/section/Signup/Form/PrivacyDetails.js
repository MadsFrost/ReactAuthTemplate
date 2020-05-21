import React from 'react';
import '../../../../scss/modules/_authFormPrivacySuccess.scss';
import Two from './Avatar/Two';

const PrivacyDetails = ({handlePrivacy, comTrayProduct, comOtherProducts, nextStep, prevStep}) => {
 
  return (
    <div className='wrapper'>
      <div className='form-wrapper'>
      <div className='page-detail'>
      <div className="sectionText">
        <h1 className="sectionHeader">Privacy.</h1>
        <p className="sectionDescriptionPrivacy">We value your privacy.</p>
      </div>
            <div className='page-detail'>
              <p className="nextOne">1. Your Details</p> <p className="highlighted"> 2. Privacy </p> <p className="lastOne">3. Finish</p>  
            </div>
      </div>
      <div className='privacy-options'>
        <br/>
        <div>
          <input 
            type="checkbox" 
            value="comOtherProducts" 
            checked={comOtherProducts} 
            onChange={handlePrivacy('comOtherProducts')}
          />            
          <label 
            id='label-txt' 
            htmlFor="comOtherProducts">Receive communication by email for discounts or other produces related to App Navn
          </label>
        </div> 
        <br/> 
      </div>   
      <br/>
      <div className="buttonGroup">
        <button className="stepBtn" id='btn-next' onClick={nextStep}>Create</button>
        <br/>
        <button className="stepBtn" id='btn-back' onClick={prevStep}>Back</button>
      </div>
    </div>    
    <Two />
  </div>            
)};

export default PrivacyDetails;