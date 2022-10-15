import React from "react";

const PersonalDetails =({prevStep, nextStep, handleChange, values}) => {

    const Continue = e => {
        e.preventDefault();
        nextStep();
    }

    return(
        <div>
            <form class="needs-validation" novalidate="">
                <div class="row g-3">
                    <div class="col-sm-6">
                        <label for="firstName" class="form-label">First name</label>
                        <input type="text" class="form-control" id="firstName" placeholder="" required="" onChange={handleChange('firstName')}
                        defaultValue={values.firstName}></input>
                        <div class="invalid-feedback">
                        Valid first name is required.
                        </div>
                    </div>

                    <div class="col-sm-6">
                        <label for="lastName" class="form-label">Last name</label>
                        <input type="text" class="form-control" id="lastName" placeholder="" required=""
                         onChange={handleChange('lastName')}
                         defaultValue={values.lastName}></input>
                        <div class="invalid-feedback">
                        Valid last name is required.
                        </div>
                    </div>

                    <div class="col-12">
                        <label for="username" class="form-label">Username</label>
                        <div class="input-group has-validation">
                        <span class="input-group-text">@</span>
                        <input type="text" class="form-control" id="userName" placeholder="Username" required="" onChange={handleChange('userName')}
                defaultValue={values.userName}></input>
                        <div class="invalid-feedback">
                            Your username is required.
                        </div>
                    </div>
                    <div class="col-12">
                        <label for="email" class="form-label">Email <span class="text-muted">(Optional)</span></label>
                        <input type="email" class="form-control" id="email" placeholder="you@example.com" onChange={handleChange('email')}
                        defaultValue={values.email}></input>
                        <div class="invalid-feedback">
                            Please enter a valid email address for shipping updates.
                        </div>
                    </div>

                    </div>
                    
                    <div class="checkout-button-wrap-left">
                        <button class="w-30 btn btn-primary btn-lg" type="submit" onClick={ Continue }>Next</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default PersonalDetails