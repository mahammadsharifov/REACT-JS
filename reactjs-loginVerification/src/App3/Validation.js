import React from 'react';

const ValidPass = (props) => {
    let validationMsg = '';
    const classes = [];

    if (props.passLength === 0){
        validationMsg = '';
    }
    else if (props.passLength < 8){
        validationMsg = `password is too short and must be minimum 8 symbols!`;
        classes.push('red');
    }else{
        validationMsg = 'Password is secure!';
        classes.push('green');
    }
    return (
        <div>
            <label className={classes}>{ validationMsg }</label>
        </div>
    );
};

export default ValidPass;