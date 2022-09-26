import validator from 'validator';


function validateName(name) {

    if (validator.isEmpty(name)) {
        return '👉 Name is required';
    } else if (name.length<2) {
        return '👉 Please input your correct name';
    }
    return false
}

function validateMobile(mobile) {

    if (validator.isEmpty(mobile)) {
        return '👉 Mobile is required';
    } else if (!Number.isInteger(parseInt(mobile))) {
        return '👉 Mobile no. cannot be string';
    }
    else if(mobile.length>10){
        return '👉 Mobile no. cannot be more than 10 character'
    }
    else if (mobile.length < 10) {
        return '👉 Mobile no. cannot be less than 10 character'
    }
    else if (mobile.length === 10) {
        return false
    }
    return false
}

function validateEmail(email) {

    if (validator.isEmpty(email)) {
        return '👉 Email is required';
    } else if (!validator.isEmail(email)) {
        return '👉 Invalid Email';
    }
    return false
}

function validatePassword(password) {
    if (validator.isEmpty(password)) {
        return '👉 Password is required';
    } else if (!validator.isLength(password, { min: 8 })) {
        return '👉 Password should be minimum 8 characters';
    }
    return false;
}



export {validateName,validateMobile,validateEmail,validatePassword}