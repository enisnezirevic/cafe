import {apiClient} from "./api.service.ts";
import {handleBadRequestError} from "../utils/error_handler.ts";

type Login = {
  username: string;
  password: string;
}

type Register = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  password: string;
  ageAgreement: boolean;
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
      const errorMessage = handleBadRequestError(e, "Please ensure your credentials are correct and try again.");
      throw new Error(errorMessage);
    }
  },

  performRegistration: async (form: Register) => {
    try {
      const response = await apiClient.post("users/register", {
        first_name: form.firstName,
        last_name: form.lastName,
        username: form.username,
        email: form.email,
        password: form.password,
        age_agreement: form.ageAgreement,
      });
      return response.data;
    } catch (e: any) {
      const errorMessage = handleBadRequestError(e, "An unknown error occurred during registration. Please try again later.");
      throw new Error(errorMessage);
    }
  }
};

export {AuthService};
export type {Login};
