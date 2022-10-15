import React from "react";

const Confirmation = ({ prevStep, nextStep, values }) => {
    console.log(values);
    const { firstName, lastName, email, username, address, address2, state, zip, cardType, cardName, cardNumber, expiration, cvv, country } = values
    const Continue = e => {
      e.preventDefault();
      nextStep();
    }
  
    const Previous = e => {
      e.preventDefault();
      prevStep();
    }

    return (
        <div>
          <div>
            <ul>
              <li>
                First Name: {firstName}
              </li>
              <li>
                Last name: {lastName}
              </li>
              <li>
                Email: {email}
              </li>
              <li>
                User name: {username}
              </li>
              <li>
                Address: {address}
              </li>
              <li>
                Address2: {address2}
              </li>
              <li>
                State: {state}
              </li>
              <li>
                zip: {zip}
              </li>
              <li>
                Country: {country}
              </li>
              <li>
                Card type: {cardType}
              </li>
              <li>
                Card name: {cardName}
              </li>
              <li>
                Card number: {cardNumber}
              </li>
              <li>
                Expiration: {expiration}
              </li>
              <li>
                CVV: {cvv}
              </li>
            </ul>
    
            <br />
            <div class="checkout-button-wrap-left">
                <button class="w-30 btn btn-primary btn-lg" type="submit" onClick={ Previous  }>Previous</button>
            </div>
            <div class="checkout-button-wrap-right">
                <button class="w-30 btn btn-primary btn-lg" type="submit" onClick={ Continue }>Confirm order</button>
            </div>

          </div>
        </div>
      )
    }
    
    export default Confirmation