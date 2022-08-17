import axios from "axios";

const defaultAPI: any = process.env.REACT_APP_API_URL;
const options: any = {
    headers: new Headers({
      'Content-Type': 'application/x-www-form-urlencoded',
    })
  }
const config: any = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Accept': 'application/json, text/plain, */*',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    }
}

export function authService(auth_data: any): any {
    return axios.post(defaultAPI + 'authenticate', auth_data, options);
}

export function logOutService(): any {
    console.log(localStorage.getItem('token'));
    return axios.post(defaultAPI + 'logout', config.headers);
}