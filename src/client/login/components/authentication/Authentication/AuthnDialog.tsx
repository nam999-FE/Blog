import { useState, MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import { Link } from "react-router-dom"
import { AuthenticationAction } from "../../../../../config/enum"
import { SignUp } from "./SignUp"
import { SignIn } from "./SignIn"

export const AuthnDialog = () => {
  const { t } = useTranslation()

  const [switchTab, setSwitchTab] = useState<AuthenticationAction>(
    AuthenticationAction.SignIn
  )

  const onClick = (
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent> | any
  ) => {
    const { role } = e.target
    if (role === "signUp") {
      setSwitchTab(AuthenticationAction.SignUp)
      return
    }
    setSwitchTab(AuthenticationAction.SignIn)
  }

  const renderNavTabs = () => {
    return (
      <ul className="flex flex-wrap mb-negative1">
        <Link
          to="/sign-in"
          className="nav-link p-4 cursor-pointer relative before:focus:bg-primary"
          role="signIn"
          onClick={(e) => onClick(e)}
        >
          {t("signIn")}
        </Link>
        <Link
          to="/sign-up"
          className="nav-link p-4 cursor-pointer relative before:focus:bg-primary"
          role="signUp"
          onClick={(e) => onClick(e)}
        >
          {t("signUp")}
        </Link>
      </ul>
    )
  }

  const renderTabs = () => {
    switch (switchTab) {
      case AuthenticationAction.SignIn:
        return <SignIn />
      case AuthenticationAction.SignUp:
        return <SignUp />
      default:
        return ''
    }
  }

  return (
    <section className="h-screen">
      <div className="max-w-sm flex flex-col m-auto h-full justify-center">
        <div className="border-shared rounded-sm">
          <div className="border-b border-gray ">{renderNavTabs()}</div>
          <div className="p-5">{renderTabs()}</div>
        </div>
      </div>
    </section>
  )
}
