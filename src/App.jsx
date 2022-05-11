import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/homeComp/Home";
import Contact from "./components/contact/Contact";
import Components from "./components/displayComponents/Components";
import About from "./components/about/About";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/components' element={<Components />} />
        <Route path='/about' element={<About />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
