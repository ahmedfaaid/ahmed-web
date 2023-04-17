export const validateEmail = (email: string) => {
  const comp = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return comp.test(email.trim());
};

export const validate = (touched: any, formFields: any) => {
  let errors: {
    email: string;
    name: string;
    subject: string;
    message: string;
  } = {
    email: '',
    name: '',
    subject: '',
    message: ''
  };
  switch (true) {
    case touched.name && !formFields.name:
      errors.name = 'Please enter your name';
      break;
    case (touched.email && !formFields.email) ||
      (touched.email && !validateEmail(formFields.email)):
      errors.email = 'Please enter a valid email address';
      break;
    case touched.subject && !formFields.subject:
      errors.subject = 'Please enter a subject for your message';
      break;
    case touched.message && !formFields.message:
      errors.message = 'Please enter your message';
      break;
    default:
      break;
  }
  return errors;
};
