import { Navigate } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

interface IAuthGuardProps {
  children: JSX.Element;
}

const AuthGuard = (props: IAuthGuardProps) => {

  const { user } = useAuth();

  if (user) {
    return props.children;
  }
  else {
    return <Navigate to="/auth/login" />;
  }
};

export default AuthGuard;