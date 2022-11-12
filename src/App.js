import './App.css';
import { Home } from './pages/Home/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Vehicles } from './pages/Vehicles/Vehicles';
import { NewVehicle } from './pages/NewVehicle/NewVehicle';
import { Regionals } from './pages/Regionals/Regionals';
import { NewRegional } from './pages/NewRegional/NewRegional';
import { Enviroments } from './pages/Enviroments/Enviroments';
import { NewEnviroment } from './pages/NewEnviroment/NewEnviroment';
import { GlobalStorage } from './GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <GlobalStorage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vehicles" element={<Vehicles />} />
          <Route path="/new-vehicle" element={<NewVehicle />} />
          <Route path="/regionals" element={<Regionals />} />
          <Route path="/new-regional" element={<NewRegional />} />
          <Route path="/enviroments" element={<Enviroments />} />
          <Route path="/new-enviroment" element={<NewEnviroment />} />
        </Routes>
      </GlobalStorage>
    </BrowserRouter>
  );
}

export default App;
