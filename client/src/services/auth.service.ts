import {apiClient} from "./api.service.ts";

type Login = {
  username: string;
  password: string;
}

const AuthService = {
  performLogin: async (form: Login) => {
    try {
      const response = await apiClient.post("users/login", {
          username: form.username,
          password: form.password
        }
      );
      return response.data;
    } catch (e: any) {
      if (e.response) {
        switch (e.response.status) {
          case 400:
            throw new Error("Please ensure your credentials are correct and try again.");
          case 401:
            throw new Error("Your credentials are incorrect. Please check your username and password and try again.");
          default:
            throw new Error("We encountered an unexpected issue. Please try again later.");
        }
      } else {
        throw new Error("We were unable to connect to the server. Please check your internet connection and try again.");
      }
    }
  }
};

export {AuthService};
export type {Login};
