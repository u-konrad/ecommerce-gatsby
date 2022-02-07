import { Router } from "@reach/router"
import ProfilePage from "../../components/ProfilePage"
import PrivateRoute from "../../components/PrivateRoute"

import React from "react"

const AccountPage = () => {
  return (
    <div>
      <Router basepath="/account">
        <PrivateRoute path="*" component={ProfilePage} />
      </Router>
    </div>
  )
}

export default AccountPage
