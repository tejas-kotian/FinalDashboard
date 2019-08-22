import { handleResponse, handleError } from "./apiUtils";
const baseUrl = process.env.API_URL + "/assests/";

export function getAssests() {
  return fetch(baseUrl)
    .then(handleResponse)
    .catch(handleError);
}

