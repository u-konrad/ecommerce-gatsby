import React from "react"
import { Formik, Form } from "formik"
import InputField from "./InputField"
import { BsGoogle } from "react-icons/bs"
import * as Yup from "yup"
import { auth } from "../firebase/firebase.utils"
import { signInWithEmailAndPassword, signInWithGoogle } from "firebase/auth"

const LoginForm = () => {

  const schema = Yup.object({
    email: Yup.string()
      .email("Proszę, wprowadź poprawny email.")
      .required("Proszę, wprowadź email."),
    password: Yup.string()
      .required("Proszę, wprowadź hasło.")
      .min(6, "Hasło musi zawierać co najmniej 6 liter."),
  })

  const initFormValues = { password: "", email: "" }

  const submitHandler = async (values, actions) => {
    const { email, password } = values

    try {
      await signInWithEmailAndPassword(auth, email, password)
      actions.resetForm()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={submitHandler}
      initialValues={initFormValues}
    >
      {props => (
        <Form>
          <InputField
            id="login-email"
            name="email"
            type="text"
            placeholder="Twój email..."
            {...props}
          />
          <InputField
            id="login-password"
            name="password"
            label="Hasło"
            type="password"
            placeholder="Twoje hasło..."
            {...props}
          />
          <button type="submit" className="btn btn-dark btn-sharp">
            Zaloguj
          </button>

          <button type="button" className="btn btn-accent btn-sharp">
            <BsGoogle className="me-2" /> Zaloguj przez Google
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
