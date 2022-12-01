export const SignIn = () => {
  return (
    <div className="">
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

        <div className="flex justify-between items-center mb-6">
          <div className="form-group form-check">
            <input
              type="checkbox"
              className="check h-4 w-4 mt-1 mr-2"
              id="exampleCheck2"
            />
            <label className="form-check-label inline-block text-gray-800">
              Remember me
            </label>
          </div>
          <a href="#!" className="text-gray-800">
            Forgot password?
          </a>
        </div>
        <div className="text-center lg:text-left">
          <button type="button" className="btn-shared w-full py-2.5 px-6">
            Login
          </button>
        </div>
      </form>
    </div>
  )
}
