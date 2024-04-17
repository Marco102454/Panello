import "./Home.css"
import NavBar from "./components/NavBar";
import { BrowserRouter , Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Contact from "./screens/Contact";
import Descargar from "./screens/Descargar";
import Nosotros from "./screens/Nosotros";
import Login from "./screens/Login";
import Registro from "./screens/Registro";

function App() {
  return (
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/Contacto" element={<Contact/>}/>
            <Route path="/Descarga" element={<Descargar/>}/>
            <Route path="/Nosotros" element={<Nosotros/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Registro" element={<Registro/>}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
