import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Home from "./components/homeComp/Home";
import Contact from "./components/contact/Contact";
import Components from "./components/displayComponents/Components";
import About from "./components/about/About";
import Login from "./components/login/login/Login";
import CreateUser from "./components/login/createUser/CreateUser";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  return (
    <div className='App'>
      <Header user={user} setUser={setUser} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact user={user} />} />
        <Route path='/components' element={<Components />} />
        <Route path='/about' element={<About />} />
        <Route path='/login' element={<Login />} />
        <Route path='/createUser' element={<CreateUser />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
