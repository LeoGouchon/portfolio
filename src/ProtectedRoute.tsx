import {Navigate} from "react-router-dom";
import React from "react";
import {useAuth} from "./providers/AuthProvider.tsx";

interface ProtectedRouteProps {
    children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }:ProtectedRouteProps) => {
    const { isAdmin } = useAuth();

    if(!isAdmin) {
        return <Navigate to="/" replace />
    }
    return <>{children}</>;
}