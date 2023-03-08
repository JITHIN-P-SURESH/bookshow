
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Navb from './Components/Navb';
import Footer from './Components/Footer';
import Home from "./Home";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movies from "./Components/Pages/Movies";
import Stream from "./Components/Pages/Stream";
import Events from "./Components/Pages/Events";
import Signup from "./Components/Signup";



function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navb/>
      <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/movies' element={<Movies/>} />
      <Route path='/stream' element={<Stream/>} />
      <Route path='/events' element={<Events/>} />
      <Route path='/signup' element={<Signup/>} />

       </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
