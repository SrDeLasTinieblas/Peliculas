import { Inicio } from './containers/App';
import Login from './containers/LoginUsuario/Login';
//import Registro from './containers/RegistroUsuario/Registro';
import {
  BrowserRouter,
  Route,
  Routes
} from "react-router-dom";
import { AuthProvider } from './components/context/authContext';
import { Home } from './containers/Home/Home';
import { Register } from './containers/RegistroUsuario/Register';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import Pelicula from './components/Pelicula/Pelicula';

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
            <Route path="/" element={<Inicio/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/registro" element={<Register/>} />

            <Route path='/home' element={
            <ProtectedRoute>
            <Home/>
            </ProtectedRoute>
            } />

          <Route path='/pelicula' element={
          <ProtectedRoute >
              <Pelicula/>
          </ProtectedRoute>
          } />
            

            {/*<Route path="/login" element={} />*/}
        </Routes>
      </AuthProvider>
  </BrowserRouter>
  );
}
