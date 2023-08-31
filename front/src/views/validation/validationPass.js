const validationPass = (logInfo, errors, setErrors) => {
  //PASSWORD

  if (!logInfo.password) {
  } else if (logInfo.password.length < 6 || logInfo.password.length > 10) {
    setErrors({
      ...errors,
      password: "The password length must be between 6 and 10 characters",
    });
  } else if (!/\d/.test(logInfo.password)) {
    setErrors({
      ...errors,
      password: "The passwor must contain at least one number",
    });
  } else {
    setErrors({ ...errors, password: "" });
  }
};

export default validationPass;
