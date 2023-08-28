import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'

const initialValues = {
    firstname: 'Darshik',
    lastname: '',
    email: '',
    password: '',
    Comments: '',
    address: '',
    number: '',
    phoneNumbers: ['','']
}

const onSubmit = values => {
    console.log('Signup data', values)
}

const validate = values => {
    // values.firstname values.lastname values.email values.password
    // errors.firstname errors.lastname errors.email errors.password
    // errors.firstname = "This Fiels Is Required"
    let errors = {}

    if (!values.firstname) {
        errors.firstname = 'Required'
    }

    if (!values.lastname) {
        errors.lastname = 'Required'
    }

    if (!values.email) {
        errors.email = 'Required'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email format'
    }

    if (!values.password) {
        errors.password = 'Required'
    }

    if (!values.number) {
        errors.number = 'Required'
    }

    return errors
}

const validationSchema = Yup.object({
    firstname: Yup.string().required('Required*'),
    lastname: Yup.string().required('Required*'),
    email: Yup.string().email('Invalid email format').required('Required*'),
    password: Yup.string().required('Required*'),
})

export default function Register() {

    // const [firstname, setFirstName] = useState("")
    // const [lastname, setLastName] = useState("")
    // const [password, setPassword] = useState("")
    // const [email, setEmail] = useState("")

    // function signUp() {

    //     var item = { firstname, lastname, email, password }
    //     console.warn(item)
    // }

    console.log('visited feilds')

    return (
        <>
            <section className="text-center text-lg-start">
                <div className="container py-4">
                    <div className="row g-0 align-items-center">
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <div className="card login-card bg_white cascading-right relative left-[50px] backdrop-blur bg-white/30">
                                <div className="card-body p-5 shadow-5 text-center">
                                    <h2 className="fw-bold mb-5">Sign up now</h2>
                                    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
                                        <Form>
                                            <div className="row">
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline form-control">
                                                        <label className="form-label !text-black font-semibold" htmlFor="firstname">First name:</label>
                                                        <Field type="text" id="firstname" name='firstname' className=" !text-black form-control !border-2 !border-blue-300" placeholder='Enter First Name' />
                                                        <ErrorMessage className='text-red-500 w-fit' component='div' name='firstname' />
                                                    </div>
                                                </div>
                                                <div className="col-md-6 mb-4">
                                                    <div className="form-outline form-control">
                                                        <label className="form-label !text-black font-semibold" htmlFor="lastname">Last name:</label>
                                                        <Field type="text" id="lastname" name='lastname' className=" !text-black form-control !border-2 !border-blue-300" placeholder='Enter Last Name' />
                                                        <ErrorMessage className='text-red-500 w-fit' component='div' name='lastname' />
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="form-outline form-control mb-4">
                                                <label className="form-label !text-black font-semibold" htmlFor="comments">Comments:</label>
                                                <Field as='textarea' type="email" id="comments" name='comments' className="form-control !
                                                  !text-black !border-2 !border-blue-300" />
                                                <ErrorMessage className='text-red-500 w-fit' component='div' name='comment' />
                                            </div>

                                            <div className="form-outline form-control mb-4">
                                                <label className="form-label !text-black font-semibold" htmlFor="address">Address:</label>
                                                <Field as='textarea' type="email" id="address" name='address' className="form-control !
                                                  !text-black !border-2 !border-blue-300">
                                                    {
                                                        (props) => {
                                                            const { field, form, meta } = props
                                                            console.log('Render props', props)
                                                            return (
                                                                <div>
                                                                    <input className="form-control !
                                                                      !text-black !border-2 !border-blue-300" type='text' id='address'{...field} />
                                                                    {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                </Field>
                                            </div>

                                            <div className="form-outline form-control mb-4">
                                                <label className="form-label !text-black font-semibold" htmlFor="number">Phone Number</label>
                                                <Field type="number" id="number" name='number' className="form-control !
                                                  !text-black !border-2 !border-blue-300" placeholder='phone number' />
                                                <ErrorMessage className='text-red-500 w-fit' component='div' name='number' />
                                            </div>

                                            <div className="form-outline form-control mb-4">
                                                <label className="form-label !text-black font-semibold" htmlFor="number2">Extra Phone Number</label>
                                                <Field type="number" id="number2" name='number2' className="form-control !
                                                  !text-black !border-2 !border-blue-300" placeholder='Extra phone number' />
                                            </div>

                                            <div className="form-outline form-control mb-4">
                                                <label className="form-label !text-black font-semibold" htmlFor="email">Email address:</label>
                                                <Field type="email" id="email" name='email' className="form-control !
                                                  !text-black !border-2 !border-blue-300" placeholder='Email Address' />
                                                <ErrorMessage className='text-red-500 w-fit' component='div' name='email' />
                                            </div>

                                            <div className="form-outline form-control mb-4">
                                                <label className="form-label !text-black font-semibold" htmlFor="password">Password:</label>
                                                <Field type="password" id="password" name='password' className=" !text-black form-control !border-2 !border-blue-300" placeholder='Set Password' />
                                                <ErrorMessage className='text-red-500 w-fit' component='div' name='password' />
                                            </div>

                                            <div className="form-check d-flex justify-content-center mb-4">
                                                <input className="form-check-input me-2" type="checkbox" value="" id="subscribe" name='subscribe' />
                                                <label className="form-check-label" htmlFor="subscribe">
                                                    Subscribe to our newsletter
                                                </label>
                                            </div>
                                            {/* <Link to=""> */}
                                            <button type="submit" className="btn text-white btn-block bg-blue-500 mb-4">
                                                Sign up
                                            </button>
                                            {/* </Link> */}
                                            <div className="text-center">
                                                <p>or sign up with:</p>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-facebook-f"></i>
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-google"></i>
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-twitter"></i>
                                                </button>
                                                <button type="button" className="btn btn-link btn-floating mx-1">
                                                    <i className="fab fa-github"></i>
                                                </button>
                                            </div>
                                        </Form>
                                    </Formik>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-5 mb-lg-0">
                            <img src="https://source.unsplash.com/400x500/?bangels-jewellery" className="w-75 h-100 rounded-3 shadow-4" alt="" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}