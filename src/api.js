// export const BASE_URL = "https://jsonplaceholder.typicode.com";
import axios from "axios";

export const apiUrl = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
    