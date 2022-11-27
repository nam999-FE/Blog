import { Link } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'

export const Register = () => {
  return (
    <div>
      <form>
        <div>
          Email
          <input type="email" name="email" placeholder="Email" />
        </div>
        <div>
          Pass
          <input type="password" name="email" placeholder="Password" />
        </div>
        <button type="submit">Submit</button>
        <span>
          Already have an account ? <Link to="/login"> Login </Link>
        </span>
      </form>
      <ToastContainer />
    </div>
  )
}
