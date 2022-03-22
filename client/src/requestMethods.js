import axios from "axios";

const BASE_URL = "http://localhost:5000/";

const TOKEN = JSON.parse(localStorage.getItem("currentUserToken"));

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { authorization: `Bearer ${TOKEN}` },
});
