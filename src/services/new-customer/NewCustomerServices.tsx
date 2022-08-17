/* eslint-disable @typescript-eslint/no-unused-vars */
import axios from "axios";

const defaultAPI: any = process.env.REACT_APP_API_URL;
const config: any = {
    headers: {
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    withCredentials: false,
}

const config_update: any = {
    headers: {
      'Access-Control-Allow-Credentials': true,
      'Accept': 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('token'),
    },
    withCredentials: false,
}

const config_stripe: any = {
    headers: {
      'Access-Control-Allow-Credentials': false,
      'Access-Control-Allow-Origin': 'http://localhost:5000',
      'Accept': 'application/json',
    },
    withCredentials: false,
}

const stripeApi: string = 'http://localhost:5000';

export const NewCustomerService = {
    newCustomerService: function (body_data: any): any {
        return axios.post(defaultAPI + 'new-customer', body_data, config);
    },
    getNewCustomerServices: function () {
        const users_id = localStorage.getItem('users_id');
        return axios.get(defaultAPI + 'new-customer/' + users_id, config);
    },
    destroyCustomerServiceById: function(id: number) {
        return axios.delete(defaultAPI + 'new-customer/' + id, config_update);
    }, 
    updateCustomerServiceById: function(id: number, body_data: any) {
        return axios.put(defaultAPI + 'new-customer/' + id, body_data, config_update);
    }, 
    getNewCustomerServicesById: function (id: number) {
        return axios.get(defaultAPI + 'new-customer-by-id/' + id, config_update)
    },
    postPayment: function (amount: number) {
        let body = {
            amount: amount
        }
        return axios.post(stripeApi + '/create-checkout-session', body, config_stripe);
    }
}   
