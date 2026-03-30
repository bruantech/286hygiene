import { AuthProvider } from "../../components/auth/AuthContext";

export default function DashboardLayout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
