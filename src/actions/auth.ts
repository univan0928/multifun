import api from "../lib/api";

type ILoginFunction = (email: string, password: string) => Promise<ILoginFunctionResult>;
type ILoginFunctionResult = {
  status: boolean,
  result?: {
    email: string,
  }
};

export const login: ILoginFunction = async (email, password) => {
  const response = await api.post("/auth/login", {
    email: email,
    password: password
  });
  if (response.data && response.data.status) {
    return {
      status: true,
      result: {
        email: response.data.user.email
      }
    };
  }
  else {
    return {
      status: false,
    };
  }
};

export const logout = () => {

};

export const register = () => {

};