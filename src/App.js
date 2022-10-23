import './App.css';
import Navbar from './components/Navbar';
import { HashRouter, Routes,Route,} from "react-router-dom";
import Home from './components/Home';
import Services from './components/Service';
import About from './components/About';
import Contect from './components/Contect'

function App() {
  return (
    <>
   <HashRouter>
   <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/Services" element={<Services/>} />
      <Route path="/contect" element={<Contect/>} />
    </Routes>
  </HashRouter>
    </>
  );
}

export default App;
