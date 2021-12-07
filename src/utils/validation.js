import * as Yup from 'yup';

const RegisterSchema = Yup.object({
  Username: Yup.string()
    .required('Username is required')
    .min(2, 'Username should be greater than 2 characters')
    .max(15, 'Username should be less than 15 characters'),
  FirstName: Yup.string()
    .required('Firstname is required')
    .min(2, 'Firstname should be greater than 2 characters')
    .max(15, 'Firstname should be less than 15 characters'),
  LastName: Yup.string()
    .required('Lastname is required')
    .min(2, 'Lastname should be greater than 2 characters')
    .max(15, 'Lastname should be less than 15 characters'),
  Email: Yup.string()
    .required('Email is required')
    .email('Invalid email address'),
  Password: Yup.string()
    .required('Password is required')
    .min(7, 'Password should be greater than 8 characters')
    .max(15, 'Password should be less than 15 characters'),
});

const LoginSchema = Yup.object({
  username: Yup.string().required('Username is required.'),
  password: Yup.string().required('Password is required.'),
});

export {RegisterSchema, LoginSchema};
