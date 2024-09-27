import axios from "axios";
import {AuthService} from "./auth.service.ts";
import {UserService} from "./user.service.ts";

export const apiClient = axios.create({
  baseURL: "http://localhost:8000/api/",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const ApiService = {
  ...AuthService,
  ...UserService
};