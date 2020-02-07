import { baseUrl } from "../config";

export const User = {
  current() {
    return fetch(`${baseUrl}/users/current`, {
      method: "GET",
      credentials: "include"
    }).then(res => res.json());
  }
};
