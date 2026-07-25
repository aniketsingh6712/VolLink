const passwordRegex =
  /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const phoneRegex = /^(\+91)?[6-9]\d{9}$/;

export function validateSignup(user) {
  const errors = {};

  if (!user.full_name.trim()) {
    errors.full_name = "Full name is required";
  }

  if (!user.email) {
    errors.email = "Email is required";
  }

  if (!user.password) {
    errors.password = "Password is required";
  } else if (!passwordRegex.test(user.password)) {
    errors.password =
      "Min 8 chars, 1 uppercase, 1 number, 1 special character";
  }

  if (user.password !== user.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  if (!user.phone) {
    errors.phone = "Phone number is required";
  } else if (!phoneRegex.test(user.phone)) {
    errors.phone = "Enter a valid 10-digit Indian number";
  }

  return errors;
}