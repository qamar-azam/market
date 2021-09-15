import axios from "axios"
import { BASE_URL } from "../../utils/config"

export interface query {
  _limit?: number
  _page?: number
}
export function apiFetchProducts(query: query) {
  return axios.get(BASE_URL + "/products", { params: query })
}
