const regExp = /^[a-zA-Z0-9]+$/;

function validatePassword(value) {
  if (regExp.test(value)) {
    return ""
  } else {
    return "Password must contain latin symbols and numbers only!"
  }
}

export default validatePassword;
