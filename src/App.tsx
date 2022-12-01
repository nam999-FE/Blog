import { lazy } from "react"
import { useTranslation } from "react-i18next"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthnDialog } from "./client/login/components/authentication/Authentication/AuthnDialog"
import i18n from "i18next"
import { Suspense } from "react"


const SignIn = lazy(() =>
  import("./client/login/components/authentication/Authentication/SignIn").then(({ SignIn }) => ({
    default: SignIn,
  }))
)
const SignUp = lazy(() =>
  import("./client/login/components/authentication/Authentication/SignUp").then(({ SignUp }) => ({
    default: SignUp,
  }))
)
const Secret = lazy(() =>
  import("./client/login/components/authentication/Authentication/Secret").then(({ Secret }) => ({
    default: Secret,
  }))
)

function App() {
  const { t } = useTranslation("translation")
  const changeLanguage = (e: any) => {
    const languageValue = e.target.value
    i18n.changeLanguage(languageValue)
  }

  return (
    <>
    <Suspense  fallback={''} >
      <BrowserRouter>
        <AuthnDialog />
        <Routes>
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/secret" element={<Secret />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    </>
  )
}

export default App
