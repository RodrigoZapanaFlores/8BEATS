import { NavBar } from "./components";
import { Routes, Route } from 'react-router-dom';
import { DiscoverScreen, CreateBeatScreen } from "./screens";

function App() {
  return (
    <>
      <NavBar />
      
      <div className="container py-3">
        <Routes>
          <Route path='/' element={<DiscoverScreen />} />
          <Route path='/create-beat' element={<CreateBeatScreen />} />
        </Routes>
      </div>
    </>
  );
}

export default App;