import { Inicio } from './containers/App';
import { Login } from './containers/Login';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<div>registro</div>} />
            {/*<Route path="/login" element={} />*/}
        </Routes>
  </BrowserRouter>
  );
}
