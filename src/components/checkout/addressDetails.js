import React from "react";

const AddressDetails =({prevStep, nextStep, handleChange, values}) => {

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
        
                    <div class="col-12">
                        <label for="address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="address" placeholder="1234 Main St" required="" onChange={handleChange('address')}
                        defaultValue={values.address}></input>
                        <div class="invalid-feedback">
                            Please enter your shipping address.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="address2" class="form-label">Address 2 <span class="text-muted">(Optional)</span></label>
                        <input type="text" class="form-control" id="address2" placeholder="Apartment or suite" onChange={handleChange('address2')}
                        defaultValue={values.address2}></input>
                    </div>

                    <div class="col-md-5">
                        <label for="country" class="form-label">Country</label>
                        <select class="form-select" id="country" required="" onChange={handleChange('country')}
                        defaultValue={values.country}>
                            <option>Choose...</option>
                            <option>United States</option>
                            <option>Finland</option>
                        </select>
                        <div class="invalid-feedback">
                            Please select a valid country.
                        </div>
                    </div>

                    <div class="col-md-4">
                        <label for="state" class="form-label">State</label>
                        <select class="form-select" id="state" required="" onChange={handleChange('state')}
                        defaultValue={values.state}>
                            <option>Choose...</option>
                            <option>California</option>
                            <option>Nevada</option>
                        </select>
                        <div class="invalid-feedback">
                            Please provide a valid state.
                        </div>
                    </div>

                    <div class="col-md-3">
                        <label for="zip" class="form-label">Zip</label>
                        <input type="text" class="form-control" id="zip" placeholder="" required="" onChange={handleChange('zip')}
                        defaultValue={values.zip}></input>
                        <div class="invalid-feedback">
                            Zip code required.
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

export default AddressDetails