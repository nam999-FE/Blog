import { lazy } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"

const SignIn = lazy(() =>
  import("./client/login/components/SignIn").then(({ SignIn }) => ({
    default: SignIn,
  }))
)
const Register = lazy(() =>
  import("./client/login/components/Register").then(({ Register }) => ({
    default: Register,
  }))
)
const Secret = lazy(() =>
  import("./client/login/components/Secret").then(({ Secret }) => ({
    default: Secret,
  }))
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
        <Route path="/secret" element={<Secret />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
