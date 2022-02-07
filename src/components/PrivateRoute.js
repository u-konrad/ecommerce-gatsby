import React from "react"
import { navigate } from "gatsby"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { setAlertWithTimeout } from "../store/alert-actions"

const PrivateRoute = ({ component: Component, location, ...rest }) => {
  const user = useSelector(state => state.user.user)
  const dispatch = useDispatch()

  if (!user && location.pathname !== `/auth`) {
    navigate("/auth")
    dispatch(
      setAlertWithTimeout({
        text: "Musisz się najpierw zalogować",
        type: "error",
      })
    )
    return null
  }

  return <Component {...rest} />
}

export default PrivateRoute
