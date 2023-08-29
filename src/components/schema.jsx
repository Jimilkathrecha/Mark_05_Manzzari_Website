import * as Yup from "yup";

export const signUpStoreSchema = Yup.object({
    title: Yup.string().min(2).max(25).required("Please enter your store title"),
    first_address: Yup.string().min(2).max(25).required("Please enter your first address"),

    second_address: Yup.string().required("Please enter your second address"),

    city: Yup.string().required("Please enter your city"),

    state: Yup.string().required("Please enter your state"),

    country: Yup.string().required("Please enter your country"),

    pincode: Yup.string().required("Please enter your pincode"),

    owner: Yup.string().required("Please enter your owner"),

    store_number: Yup.number().required("Please enter your store number"),

    refferal_code: Yup.number().required("Please enter your refferal code"),

    phone_no: Yup.string().matches(/^\d{10}$/, 'Invalid phone number').required("Please enter your phone number"),

    password: Yup.string().min(6).required("Please enter your password"),
    confirm_password: Yup.string()
        .required()
        .oneOf([Yup.ref("password"), null], "Password must match"),
});

export const LogInSchema = Yup.object({
    email: Yup.string().email().required("Please enter your email"),
    password: Yup.string().min(6).required("Please enter your password"),
});

