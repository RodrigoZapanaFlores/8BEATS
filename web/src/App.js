import { Routes, Route, Navigate } from "react-router-dom";
import { NavBar } from './components';
import { HomeScreen, ListBeatScreen, CreateBeatScreen, DetailBeatScreen, ListUserScreen, CreateUserScreen, LoginScreen } from './screens';
import { useContext } from "react";
import { AuthContext } from "./contexts/AuthContext";


function AuthGuard({ children }) {
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}

function App() {
  return (
  <>
    <NavBar/>

    <div className="App">
      <Routes>
       <Route path='/' element={<HomeScreen/>} />
       <Route path='/Beats' element={<ListBeatScreen />} />
       <Route path='/DetailBeat' element={<DetailBeatScreen />} />
       <Route path='/AddBeats' element={<AuthGuard><CreateBeatScreen /></AuthGuard>} />
       
       <Route path='/BeatMakers' element={<ListUserScreen />} />
       <Route path='/Register' element={<CreateUserScreen />} />
       <Route path='/login' element={<LoginScreen />} />
       
      </Routes>
   </div>
  </>
  
  );
}

export default App;