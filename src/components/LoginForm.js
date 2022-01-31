import React from "react"
import { Formik, Form } from "formik"
import InputField from "./InputField"
import { BsGoogle } from "react-icons/bs"
import * as Yup from "yup"
import useFirebase from "../firebase/use-firebase"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useDispatch } from "react-redux"
import { setAlertWithTimeout } from "../store/alert-actions"

const LoginForm = ({autoComplete="on"}) => {
  const { instance, signInWithGoogle } = useFirebase()
  const dispatch = useDispatch()

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
      await signInWithEmailAndPassword(instance.auth, email, password)
      actions.resetForm()
      dispatch(
        setAlertWithTimeout({ text: "Udało się zalogować!", type: "success" })
      )
    } catch (error) {
      dispatch(setAlertWithTimeout({ text: "Błąd logowania!", type: "error" }))
    }
  }

  const googleLoginHandler = async () => {
    try {
      await signInWithGoogle()
      dispatch(
        setAlertWithTimeout({ text: "Udało się zalogować!", type: "success" })
      )
    } catch (err) {
      dispatch(setAlertWithTimeout({ text: "Błąd logowania!", type: "error" }))
    }
  }

  return (
    <Formik
      validationSchema={schema}
      onSubmit={submitHandler}
      initialValues={initFormValues}
    >
      {props => (
        <Form autoComplete={autoComplete}>
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

          <button
            type="button"
            className="btn btn-accent btn-sharp"
            onClick={googleLoginHandler}
          >
            <BsGoogle className="me-2" /> Zaloguj przez Google
          </button>
        </Form>
      )}
    </Formik>
  )
}

export default LoginForm
