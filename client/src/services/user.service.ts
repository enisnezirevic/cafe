import {apiClient} from "./api.service.ts";

const UserService = {
  getUserDetails: async () => {
    try {
      const response = await apiClient.get("users/details", {
        withCredentials: true
      });
      return response.data;
    } catch (e: any) {
      if (e.response && e.response.status) {
        throw new Error("We encountered an unexpected issue. Please try again later.");
      } else {
        throw new Error("We were unable to connect to the server. Please check your internet connection and try again.");
      }
    }
  }
};

export {UserService};