import {API, HTTP} from "@/constants/enums";
import axios, {Method} from "axios";

const request = (method: string, url: string, data?: any) => {
  const request = axios.request({
    method: method as Method,
    url: `${ url }&key=${ API.key }`,
    headers: {'Content-Type': 'application/json'},
    data: data
  })

  return request.then(
    response => response.data,
    error => {
      return error;
    });
}

export const get = (url: string) => {
  return request(HTTP.get, url);
};

export const post = (url: string, data: any) => {
  return request(HTTP.post, url, data);
};

export const put = (url: string, data: any) => {
  return request(HTTP.put, url, data);
};
