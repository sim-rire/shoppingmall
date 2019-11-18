import axios from 'axios'
import {baseURL} from './require_types'

export function request(config) {
  const instance = axios.create({
    baseURL,
    timeout: 50000
  })
  instance.interceptors.request.use(req => {
    //console.log(req);
    return req
  }, err => {
    console.log(err);
  })
  instance.interceptors.response.use(res => {
   // console.log(res);
    return res.data;
  }, err => {
    console.log(err)
  })
  return instance(config)
}