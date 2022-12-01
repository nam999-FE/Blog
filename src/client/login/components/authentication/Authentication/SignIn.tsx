import { ChangeEvent, useState, FormEvent } from "react"
import { createUser } from "../api";
import { AuthenticationData } from "../types";

export const SignIn = () => {
  const [values, setValues] = useState<AuthenticationData>({
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

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await createUser(values);
    } catch(err: any) {
      console.log(err);
    }
  }
  return (
    <form onSubmit={(e) => onSubmit(e)}>
      <div className="mb-6">
        <label>
          Email
          <span className="text-red" >*</span>
        </label>
        <input
          type="text"
          name="email"
          className="input-login"
          autoComplete="name"
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
          onChange={(e) => onChange(e)}
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
  )
}
