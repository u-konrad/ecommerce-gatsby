import { alertActions } from "./store"

const alertDuration = 3000

export const setAlertWithTimeout = alert => {
  return dispatch => {
    dispatch(alertActions.setAlert(alert))

    setTimeout(() => {
      dispatch(alertActions.clearAlert())
    }, alertDuration)
  }
}
