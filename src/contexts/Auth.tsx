import React from 'react';

import { login as actionLogin } from '../actions/auth';

interface IAuthContext {
  user: any;
  login: Function | null;
  logout: Function | null;
}

interface IUser {
  email: string;
  name: string;
}

interface IAuthProviderProps {
  children: JSX.Element
}

export const AuthContext = React.createContext<IAuthContext>({
  user: null,
  login: null,
  logout: null,
});

export const AuthProvider = (props: IAuthProviderProps) => {

  const [user, setUser] = React.useState<IUser>();

  const login = (email: string, password: string) => {
    actionLogin(email, password)
      .then((result) => {

      })
      .catch(() => {

      })
      .finally(() => {

      });
  };

  const logout = () => {

  };

  return (
    <AuthContext.Provider
      value={{
        user: user,
        login: login,
        logout: logout
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};