import { baseUrl } from "../config";

export const User = {
  current() {
    return fetch(`${baseUrl}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  },
  create(params) {
    return fetch(`${baseUrl}/users`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(params)
    }).then(res => res.json());
  },
  update(params) {
    return fetch(`${baseUrl}/users/current`, {
      method: "PATCH",
      credentials: "include",
      // Note: there is no Content-Type key in the headers.
      // the content type is multipart/form-data, which implied
      // by the FormData object itself.
      headers: {
        Accept: "application/json"
      },
      // The body is not stringified. The FormData API handles
      // all the necessary processing for the image to be sent
      // over the web
      body: params
    }).then(res => res.json());
  }
};
