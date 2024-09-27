import {createContext, FC, ReactNode, useEffect, useState} from "react";
import {ApiService} from "../services/api.service.ts";

type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
}

type UserContextType = {
  user: User | null;
  login: (username: string, password: string) => Promise<void>;
}

const UserContext = createContext<UserContextType>({
  user: null,
  login: async () => {
  }
});

const UserProvider: FC<{ children: ReactNode }> = ({children}) => {
  const [user, setUser] = useState<User | null>(null);

  const login = async (username: string, password: string) => {
    const credentials = await ApiService.performLogin({username, password});

    if (credentials) {
      const userDetails: User = credentials.user_details;
      setUser(userDetails);
    } else {
      throw new Error("Unable to receive user credentials.");
    }
  };

  useEffect(() => {
    const fetchUserDetails = async () => {
      try {
        const userDetails = await ApiService.getUserDetails();
        setUser({
          firstName: userDetails.first_name,
          lastName: userDetails.last_name,
          username: userDetails.username,
          email: userDetails.email,
        });
      } catch (error) {
        setUser(null);
        throw new Error("Failed to restore user details.");
      }
    };

    fetchUserDetails();
  }, []);

  return (
    <UserContext.Provider value={{user, login}}>
      {children}
    </UserContext.Provider>
  );
};

export {
  UserProvider,
  UserContext
};
export type {User};
