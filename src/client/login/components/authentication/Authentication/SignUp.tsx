import { ChangeEvent, useState, FormEvent } from "react"

export const SignUp = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  })

  const onChange = (e:  ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value 
    })
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="mb-6">
        <label>
          Email
          <span className="text-red">*</span>
        </label>
        <input
          type="email"
          name="email"
          className="input-login"
          placeholder="Email address"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="mb-6">
        <label>
          Password
          <span className="text-red">*</span>
        </label>
        <input
          type="password"
          name="password"
          className="input-login"
          placeholder="Password"
          onChange={(e) => onChange(e)}
        />
      </div>
      <div className="text-center lg:text-left">
        <button type="submit" className="btn-shared w-14 py-2.5 px-6">
          Register
        </button>
      </div>
    </form>
  )
}
