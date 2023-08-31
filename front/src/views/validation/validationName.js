const validationUser = (logInfo, errors, setErrors) => {
  //USERNAME
  if (!logInfo.email) setErrors({ ...errors, name: "Please enter your name" });
  else if (logInfo.email.length > 10)
    setErrors({
      ...errors,
      name: "Name cannot exceed 10 characters",
    });
  else {
    setErrors({ ...errors, name: "" });
  }
};

export default validationUser;
