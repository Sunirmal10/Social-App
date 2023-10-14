import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://socialappbackend-kezq.onrender.com/api/",
  withCredentials: true,
});
