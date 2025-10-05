import { useUser } from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router";
import { LoadingSpinner } from "@components/UI/LoadingSpinner";

export function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { data: user, isLoading } = useUser();
  const location = useLocation();

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
}
