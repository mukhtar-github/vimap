import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Landing, Register, Error } from "./pages";
import {
  AddVehicle,
  AllVehicles,
  Profile,
  Stats,
  SharedLayout,
} from "./pages/dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="stats" element={<Stats />} />
          <Route path="all-vehicles" element={<AllVehicles />}></Route>
          <Route path="add-vehicle" element={<AddVehicle />}></Route>
          <Route path="profile" element={<Profile />}></Route>
        </Route>
        <Route path="/register" element={<Register />} />
        <Route path="/landing" element={<Landing />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
