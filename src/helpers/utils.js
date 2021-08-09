import SimpleReactValidator from "simple-react-validator";

export const getValidator = () => {
  return new SimpleReactValidator({
    validators: {
      _required: {
        // name the rule
        message: `This field is required.`,
        rule: (val, params, validator) => !validator.helpers.isBlank(val),
        required: true, // optional
      },
      _email: {
        message: 'This field must be a valid email address.',
        rule: (val, params, validator) => validator.helpers.testRegex(val,/^[A-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)
      },
    },
  });
};
