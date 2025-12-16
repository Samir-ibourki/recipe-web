import axios from "axios";

const apiUrl = "http://localhost:3030/api";
export const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});
