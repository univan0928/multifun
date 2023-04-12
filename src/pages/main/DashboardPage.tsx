import React from 'react';

import useAuth from '../../hooks/useAuth';

const DashboardPage = () => {

  const auth = useAuth();

  React.useEffect(() => {
    console.log(auth);
  }, []);

  return (
    <>
      Dashboard
    </>
  );
};

export default DashboardPage;