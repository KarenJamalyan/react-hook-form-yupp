import * as yup from "yup";


export const singUpSchema = yup.object().shape({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(32),
    age: yup.number().typeError('you must specify a number').required().min(18).max(99),
});

export const singInSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup.string().required().min(8).max(32),
});
