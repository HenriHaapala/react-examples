import React, { Component } from "react";
import PersonalDetails from "./personalDetails";
import AddressDetails from "./addressDetails";
import BillingDetails from "./billingDetails";
import Confirmation from "./confirmation";
import Success from "./success";
import ProgressBarComponent from "../progressBar";

export default class Checkout extends Component {
    state = {
        step: 1,
        firstName:"",
        lastName:"",
        userName:"",
        email:"",
        address:"",
        address2:"",
        country:"",
        state:"",
        zip:"",
        cardType:"",
        cardName:"",
        cardNumber:"",
        expiration:"",
        cvv:""
    }

    // go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({ step: step - 1 });
    }

    // proceed to the next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({ step: step + 1 });
    }

    // handle field change
    handleChange = input => e => {

        console.log(e.target.id);
        if(e.target.id === "credit" || e.target.id === "debit" || e.target.id === "paypall"){
            this.setState({ [input]: e.target.id });
        }
        else{
            this.setState({ [input]: e.target.value });
        }
        
    }

    render() {
        const { step } = this.state;
        const { email, userName, firstName, lastName, address, address2, zip, cardType, cardName, cardNumber, expiration, state, country, cvv } = this.state;
        const values = { email, userName, firstName, lastName, address, address2, zip, cardType, cardName, cardNumber, expiration, state, country, cvv }
        
        switch (step) {
            case 1: 
                return (
                <div>
                    <ProgressBarComponent className="progress" progress={step} name={"Personal information"}></ProgressBarComponent>
                    <PersonalDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep} />
                </div>
                )
            case 2: 
                return (
                <div>
                    <ProgressBarComponent className="progress" progress={step} name={"Address information"}></ProgressBarComponent>
                    <AddressDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>
                </div>
                )
            case 3: 
                return (
                <div>
                    <ProgressBarComponent className="progress" progress={step} name={"Payment information"}></ProgressBarComponent>
                    <BillingDetails handleChange={this.handleChange} values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>
                </div>
            )
            case 4: 
                return (
                <div>
                    <ProgressBarComponent className="progress" progress={step} name={"Confirm"}></ProgressBarComponent>
                    <Confirmation handleChange={this.handleChange} values={values} nextStep={this.nextStep} prevStep={this.prevStep}/>
                </div>
                )
            case 5:
                return (
                <div>
                    <ProgressBarComponent className="progress" progress={step} name={"Success"}></ProgressBarComponent>
                    <Success/>
                </div>
                )
            default: 
                // do nothing
            }
      }
}