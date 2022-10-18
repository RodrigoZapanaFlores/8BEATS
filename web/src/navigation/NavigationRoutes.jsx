import { Routes, Route, Navigate } from "react-router-dom";
import * as Screens from "../screens";
import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

function AuthGuard({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function NavigationRoutes() {
  return (
    <Routes>
      <Route path="/" element={ <Screens.HomeScreen /> } />
      <Route path="/login" element={ <Screens.LoginScreen /> } />
      <Route path="/beats" element={ <Screens.ListBeatsScreen /> } />
      
      <Route path="/beat/:id" element={
        <AuthGuard>
          <Screens.DetailBeatScreen />
        </AuthGuard>
      } />
      <Route path="/beats/create" element={
        <AuthGuard>
          <Screens.CreateBeatScreen />
        </AuthGuard>
      } />
      <Route path="/users/:nickname" element={
        <AuthGuard>
          <Screens.ProfileScreen />
        </AuthGuard>
      } />
    </Routes>
  )
}

export default NavigationRoutes;