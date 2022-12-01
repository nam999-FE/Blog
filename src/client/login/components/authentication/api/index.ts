import { AuthenticationData } from "../types"
import axios from "axios"
import { BASE_URL } from "../../../../../config/config"

export const createUser = (data: AuthenticationData): Promise<any> => {
  return axios.post(`${BASE_URL}/register`, {
    params: {
      ...data,
    },
  })
}
