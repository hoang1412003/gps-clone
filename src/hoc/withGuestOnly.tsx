import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";
import React from "react";

const withGuestOnly = (Component: React.ComponentType) => {
  return (
    () => {
      const isLoggedIn = !!Cookies.get("accessToken");

      if (isLoggedIn) {
        return <Navigate to="/monitor" replace />;
      }

      return <Component />;
    }
  );
};

export default withGuestOnly;
