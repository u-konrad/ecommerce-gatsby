import React from "react"
import { Formik, Form } from "formik"
import InputField from "./InputField"
import * as Yup from "yup"
import useFirebase from "../firebase/use-firebase"
import { useSelector } from "react-redux"
import { setAlertWithTimeout } from "../store/alert-actions"
import { useDispatch } from "react-redux"

const AdressForm = ({ isCheckout = false }) => {
  const { writeUserData } = useFirebase()
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  let initFormValues
  if (user) {
    initFormValues = { ...user }
    console.log(initFormValues)
  } else {
    initFormValues = {
      firstName: "",
      lastName: "",
      phoneNum: "",
      street: "",
      houseNum: "",
      postcode: "",
      city: "",
      country: "",
      email: "",
    }
  }

  const validationSchema = Yup.object({
    firstName: Yup.string(),
    lastName: Yup.string(),
    phoneNum: Yup.string().matches(/^\d{9,}$/, "Wprowadź poprawny numer."),
    street: Yup.string(),
    houseNum: Yup.string(),
    postcode: Yup.string().matches(
      /^\d\d-\d\d\d$/,
      "Wprowadź poprawny format."
    ),
    city: Yup.string(),
    country: Yup.string(),
    email: Yup.string().email("Proszę, wprowadź poprawny email."),
  })

  const submitHandler = async values => {
    try {
      await writeUserData(user.uid, values)
      dispatch(
        setAlertWithTimeout({
          text: "Zapisano dane!",
          type: "success",
        })
      )
    } catch (error) {
      dispatch(
        setAlertWithTimeout({
          text: "Błąd przy zapisywaniu danych!",
          type: "error",
        })
      )
    }
  }

  return (
    <div>
      <Formik
        validationSchema={validationSchema}
        onSubmit={submitHandler}
        initialValues={initFormValues}
        enableReinitialize
      >
        {props => (
          <Form noValidate>
            <h3>Dane kontaktowe</h3>

            <div className="row">
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="firstName"
                name="firstName"
                type="text"
                label="Imię"
                {...props}
              />
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="lastName"
                name="lastName"
                type="text"
                label="Nazwisko"
                placeholder="Twój email..."
                {...props}
              />
            </div>
            <div className="row">
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="phoneNum"
                name="phoneNum"
                type="tel"
                label="Telefon"
                placeholder="Twój email..."
                {...props}
              >
                <span className="text-muted me-2">+48</span>
              </InputField>
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="email"
                name="email"
                type="text"
                label="Email"
                placeholder="Twój email..."
                {...props}
              />
            </div>
            <h3 className="mt-2">Adres do dostawy</h3>
            <div className="row">
              <InputField
                divClass="col-md-9 col-12 mb-3"
                id="street"
                name="street"
                type="text"
                label="Ulica"
                placeholder="Twój email..."
                {...props}
              />
              <InputField
                divClass="col-md-3 col-5 mb-3"
                id="houseNum"
                name="houseNum"
                type="text"
                label="Nr domu/mieszkania"
                placeholder="Twój email..."
                {...props}
              />
            </div>
            <div className="row">
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="city"
                name="city"
                type="text"
                label="Miasto"
                placeholder="Twój email..."
                {...props}
              />
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="postcode"
                name="postcode"
                type="text"
                label="Kod pocztowy"
                placeholder="Twój email..."
                {...props}
              />
            </div>
            <div className="row">
              <InputField
                divClass="col-md-6 col-12 mb-3"
                id="country"
                name="country"
                type="text"
                label="Państwo"
                placeholder="Twój email..."
                {...props}
              />
            </div>
            <div className="w-100 d-flex-row-e mt-2 mb-5">
              {!isCheckout && (
                <button type="submit" className="btn btn-dark btn-sharp ">
                  Zapisz
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default AdressForm
