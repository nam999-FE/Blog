export const Register = () => {
  return (
    <form>
      <div className="mb-6">
        <input
          type="text"
          className="input-login"
          id="exampleFormControlInput2"
          placeholder="Email address"
        />
      </div>
      <div className="mb-6">
        <input
          type="password"
          className="input-login"
          id="exampleFormControlInput2"
          placeholder="Password"
        />
      </div>
      <div className="text-center lg:text-left">
        <button type="button" className="btn-shared w-full py-2.5 px-6">
          Register
        </button>
      </div>
    </form>
  )
}
