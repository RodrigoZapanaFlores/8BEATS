import { Routes, Route } from "react-router-dom";
import { NavBar } from './components';
import { HomeScreen, ListBeatScreen, CreateBeatScreen, DetailBeatScreen, ListUserScreen, CreateUserScreen, LoginScreen, ProfileUserScreen } from './screens';



function App() {
  return (
  <>
    <NavBar />

    <div className="App">
      <Routes>
       <Route path='/' element={<HomeScreen/>} />
       <Route path='/Beats' element={<ListBeatScreen />} />
       <Route path='/DetailBeat' element={<DetailBeatScreen />} />
       <Route path='/AddBeats' element={<CreateBeatScreen />} />
       
       <Route path='/BeatMakers' element={<ListUserScreen />} />
       <Route path='/Profile' element={<ProfileUserScreen />} />
       <Route path='/Register' element={<CreateUserScreen />} />
       <Route path='/login' element={<LoginScreen />} />

      </Routes>
   </div>
  </>
  
  );
}

export default App;