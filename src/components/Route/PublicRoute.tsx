import type { JSX } from "react";
import { Navigate } from "react-router-dom";

const PublicRoute = ({ children }: { children: JSX.Element }) => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";
    return !isLoggedIn ? children : <Navigate to="/monitor" replace />;
};

export default PublicRoute;
