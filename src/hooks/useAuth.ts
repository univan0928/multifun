import React from 'react';
import { AuthContext } from "../contexts/Auth";

const useAuth = () => React.useContext(AuthContext);

export default useAuth;