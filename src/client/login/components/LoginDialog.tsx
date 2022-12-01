import { useState, MouseEvent } from "react"
import { useTranslation } from "react-i18next"
import { AuthenticationAction } from "../../../config/enum"
import { SignIn } from "./SignIn"

export const LoginDialog = () => {
  const { t } = useTranslation()

  const [openTab, setOpenTab] = useState<AuthenticationAction>(
    AuthenticationAction.SignIn
  )

  const onClick = (
    e: MouseEvent<HTMLLIElement, globalThis.MouseEvent> | any
  ) => {
    const role: string = e.target
    if (role === "signUp") {
      setOpenTab(AuthenticationAction.SignUp)
      return
    }
    setOpenTab(AuthenticationAction.SignIn)
  }

  const renderNavTabs = () => {
    return (
      <ul className="flex flex-wrap">
        <li className="nav-item" role="signIn" onClick={(e) => onClick(e)}>
          {t("signIn")}
        </li>
        <li className="nav-item" role="signUp" onClick={(e) => onClick(e)}>
          {t("signUp")}
        </li>
      </ul>
    )
  }

  const renderTabs = () => {
    switch (openTab) {
      case AuthenticationAction.SignIn:
        return <SignIn />
      case AuthenticationAction.SignUp:
        return
      default:
        return AuthenticationAction.SignIn
    }
  }

  return (
    <section className="h-screen">
      <div className="max-w-sm my-7 mx-0 flex flex-col m-auto h-full justify-center">
        <div className="modal-header">{renderNavTabs()}</div>
        {renderTabs()}
      </div>
    </section>
  )
}
