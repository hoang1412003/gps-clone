import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from "js-cookie";

type LayoutProps = {
  children: React.ReactNode;
};

const withAuthLayout = (
  PageComponent: React.ComponentType,
  LayoutComponent: React.ComponentType<LayoutProps>
) => {
  return () => {
    const isLoggedIn = !!Cookies.get("accessToken");

    if (!isLoggedIn) {
      return <Navigate to="/login" replace />;
    }

    return (
      <LayoutComponent>
        <PageComponent />
      </LayoutComponent>
    );
  };
};

export default withAuthLayout;
