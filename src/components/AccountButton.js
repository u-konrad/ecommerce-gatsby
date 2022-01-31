import React from "react"
import { Link } from "gatsby"
import { FaUser } from "react-icons/fa"
import LoginForm from "./LoginForm"

const AccountButton = ({ user, onLogout }) => {



  return (
    <div className="account-group d-inline">
      <Link to="/auth" className="btn-icon me-3">
        <FaUser />
      </Link>
      <div className="account-popover">
        {!!user ? (
          <div>
            <p>Witaj {user.firstName || user.displayName}!</p>
            <Link
              to="/account"
              className="btn btn-sm btn-outline-dark btn-sharp w-100"
            >
              Moje konto
            </Link>
            <button
              className="btn btn-sm mt-3 btn-dark btn-sharp w-100"
              onClick={onLogout}
            >
              Wyloguj się
            </button>
          </div>
        ) : (
          <div className="login-popover w-100">
            <LoginForm />
          </div>
        )}
      </div>
    </div>
  )
}

export default AccountButton
