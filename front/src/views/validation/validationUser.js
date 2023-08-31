const validationUser = (logInfo, errors, setErrors) => {
  //USERNAME
  if (!logInfo.email)
    setErrors({ ...errors, email: "Please enter your email" });
  else if (logInfo.email.length > 35)
    setErrors({
      ...errors,
      email: "Email cannot exceed 35 characters",
    });
  else if (!/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{3})+$/.test(logInfo.email)) {
    setErrors({ ...errors, email: "Invalid email" });
  } else {
    setErrors({ ...errors, email: "" });
  }
};

export default validationUser;
