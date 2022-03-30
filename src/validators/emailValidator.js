function validateEmail(value) {
  // regex changed because it didn't match some emails like "univer@stud.kpfu.ru"
  const emailRegExp = /^([a-zA-Z0-9.]+)@((([a-zA-Z]+)\.)+)([a-zA-Z]+)$/;

  if (emailRegExp.test(value)) {
    return "";
  } else {
    return "Wrong email format!";
  }
}

export default validateEmail;
