import React, { Fragment, useState } from "react"
import { Formik, Form } from "formik"
import InputField from "./InputField"
import * as Yup from "yup"
import { auth, createUser } from "../firebase/firebase.utils"
import LoadingSpinner from "./LoadingSpinner"
import { createUserWithEmailAndPassword } from "firebase/auth"

const RegisterForm = () => {
  const [isLoading, setLoading] = useState(false)

  const schema = Yup.object({
    name: Yup.string()
      .required("Proszę, wprowadź imię.")
      .min(3, "Imię musi zawierać co najmniej 3 litery."),
    email: Yup.string()
      .email("Proszę, wprowadź poprawny email.")
      .required("Proszę, wprowadź email."),
    password: Yup.string()
      .required("Proszę, wprowadź hasło.")
      .min(6, "Hasło musi zawierać co najmniej 6 liter."),
    passwordConf: Yup.string()
      .required("Proszę, wprowadź hasło.")
      .min(6, "Hasło musi zawierać co najmniej 6 liter.")
      .oneOf([Yup.ref("password"), null], "Hasło musi się zgadzać."),
  })

  const initFormValues = { password: "", email: "", passwordConf: "", name: "" }
  const submitHandler = async (values, actions) => {
    setLoading(true)
    const { name, email, password } = values

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      )


      await createUser(user, name)
      setLoading(false)
      actions.resetForm()
    } catch (error) {
      setLoading(false)
      console.log(error)
    }
  }

  return (
    <Fragment>
      {isLoading && <LoadingSpinner asOverlay />}
      <Formik
        validationSchema={schema}
        onSubmit={submitHandler}
        initialValues={initFormValues}
      >
        {props => (
          <Form>
            <InputField
              id="name"
              name="name"
              label="Imię"
              type="text"
              placeholder="Twoje imię..."
              {...props}
            />
            <InputField
              id="email"
              name="email"
              type="email"
              placeholder="Twój email..."
              {...props}
            />
            <InputField
              id="password"
              name="password"
              label="Hasło"
              type="password"
              placeholder="Twoje hasło..."
              {...props}
            />
            <InputField
              id="passwordConf"
              name="passwordConf"
              label="Powtórz hasło"
              type="password"
              placeholder="Twoje hasło..."
              {...props}
            />
            <button type="submit" className="btn btn-dark btn-sharp">
              Zarejestruj
            </button>
          </Form>
        )}
      </Formik>
    </Fragment>
  )
}

export default RegisterForm
