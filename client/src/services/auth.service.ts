import {apiClient} from "./api.service.ts";

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
      if (e.response) {
        if (e.response.status === 400) {
          const errorData = e.response.data;
          if (errorData) {
            let firstErrorMessage = "";

            Object.entries(errorData).forEach(([_, value]) => {
              if (Array.isArray(value) && value.length > 0) {
                firstErrorMessage = value[0];
              }
            });

            throw new Error(firstErrorMessage);
          } else {
            throw new Error(
              "An unknown error occurred during registration. Please try again later."
            );
          }
        } else {
          throw new Error(
            "We were unable to connect to the server. Please check your internet connection and try again."
          );
        }
      } else {
        throw new Error(
          "An unexpected error occurred. Please check your network and try again."
        );
      }
    }
  }
};

export {AuthService};
export type {Login};
