import axios from "axios";

const defaultAPI: any = process.env.REACT_APP_API_URL + 'register';
const options: any = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  }

export function authRegisterService(register_data: any): any {
  return axios.post(defaultAPI, register_data, options);
}