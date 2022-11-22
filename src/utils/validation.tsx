export const validatePw = (pw: string) => {
  const regex1 = /^.*(?=.*[a-zA-Z]).*$/;
  const regex2 = /^.*(?=.*\d).*$/;
  const regex3 = /^.*(?=.*[!#$%&?*]).*$/;

  const errors = {
    length: false,
    upperLower: false,
    number: false,
    symbol: false,
  };

  if (pw.length < 8) {
    errors.length = true;
  } else {
    errors.length = false;
  }

  if (!regex1.test(pw)) {
    errors.upperLower = true;
  } else {
    errors.upperLower = false;
  }

  if (!regex2.test(pw)) {
    errors.number = true;
  } else {
    errors.number = false;
  }

  if (!regex3.test(pw)) {
    errors.symbol = true;
  } else {
    errors.symbol = false;
  }

  return errors;
};

export const validateEmail = (email: string) => {
  const pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return pattern.test(email);
};
