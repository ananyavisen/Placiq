import { Navigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProtectedRoute() {
  const [authenticated, setAuthenticated] = useState(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const response = await fetch(
          "http://localhost:8000/api/auth/me/",
          {
            credentials: "include",
          }
        );

        setAuthenticated(response.ok);
      } catch (error) {
        console.error("Authentication check failed:", error);
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  // Don't redirect while checking
  if (authenticated === null) {
    return <div>Loading...</div>;
  }

  // Not logged in
  if (!authenticated) {
    return <Navigate to="/" replace />;
  }

  // Logged in
  return <Outlet />;
}