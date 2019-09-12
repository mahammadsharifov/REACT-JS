import React from 'react';

const Form = (props) => {
    return(
        <form className="form-group" onSubmit={props.loadWeather}>
            <div className="row">
                <div className="col-sm-5">
                    <input type="text" class="form-control form-control-lg" name="city" placeholder="City..." />
                </div>
                <div className="col-sm-5">
                    <input type="text" class="form-control form-control-lg" name="country" placeholder="Country..." />          
                </div>
                <div className="col-sm-2">
                    <button type="submit" className="btn btn-lg btn-block btn-info">Get Weather!</button>
                </div> 
            </div>          
        </form>
    )
}

export default Form;