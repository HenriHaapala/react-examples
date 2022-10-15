import React from "react";

const BillingDetails =({prevStep, nextStep, handleChange, values}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    const Previous = e => {
        e.preventDefault();
        prevStep();
    }

    return(
        <div>
            <form class="needs-validation" novalidate="">
                <div class="row g-3">
                    <div class="my-3">
                        <div class="form-check">
                        <input id="credit" name="paymentMethod" type="radio" class="form-check-input" required="" onChange={handleChange('cardType')}
                defaultValue={values.cardType}></input>
                        <label class="form-check-label" for="credit">Credit card</label>
                        </div>
                        <div class="form-check">
                        <input id="debit" name="paymentMethod" type="radio" class="form-check-input" required="" onChange={handleChange('cardType')}
                defaultValue={values.cardType}></input>
                        <label class="form-check-label" for="debit">Debit card</label>
                        </div>
                        <div class="form-check">
                        <input id="paypal" name="paymentMethod" type="radio" class="form-check-input" required="" onChange={handleChange('cardType')}
                defaultValue={values.cardType}></input>
                        <label class="form-check-label" for="paypal">PayPal</label>
                        </div>
                    </div>

                    <div class="row gy-3">
                        <div class="col-md-6">
                        <label for="cc-name" class="form-label">Name on card</label>
                        <input type="text" class="form-control" id="cc-name" placeholder="" required="" onChange={handleChange('cardName')}
                defaultValue={values.cardName}></input>
                        <small class="text-muted">Full name as displayed on card</small>
                        <div class="invalid-feedback">
                            Name on card is required
                        </div>
                        </div>

                        <div class="col-md-6">
                        <label for="cc-number" class="form-label">Credit card number</label>
                        <input type="text" class="form-control" id="cc-number" placeholder="" required="" onChange={handleChange('cardNumber')}
                defaultValue={values.cardNumber}></input>
                        <div class="invalid-feedback">
                            Credit card number is required
                        </div>
                        </div>

                        <div class="col-md-3">
                        <label for="cc-expiration" class="form-label">Expiration</label>
                        <input type="text" class="form-control" id="cc-expiration" placeholder="" required="" onChange={handleChange('expiration')}
                defaultValue={values.expiration}></input>
                        <div class="invalid-feedback">
                            Expiration date required
                        </div>
                        </div>

                        <div class="col-md-3">
                        <label for="cc-cvv" class="form-label">CVV</label>
                        <input type="text" class="form-control" id="cc-cvv" placeholder="" required="" onChange={handleChange('cvv')}
                defaultValue={values.cvv}></input>
                        <div class="invalid-feedback">
                            Security code required
                        </div>
                        </div>
                    </div>

                    <div class="checkout-button-wrap-left">
                        <button class="w-30 btn btn-primary btn-lg" type="submit" onClick={ Previous  }>Previous</button>
                    </div>
                    <div class="checkout-button-wrap-right">
                        <button class="w-30 btn btn-primary btn-lg" type="submit" onClick={ Continue }>Next</button>
                    </div>
                        
                </div>
            </form>
        </div>
    )
}

export default BillingDetails