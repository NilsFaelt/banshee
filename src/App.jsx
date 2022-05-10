import "./App.css";
import DisplayModules from "./components/displayModules/DisplayModules";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/homeComp/Home";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/displayModules' element={<DisplayModules />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
