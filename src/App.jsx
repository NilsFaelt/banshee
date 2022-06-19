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
import Buttons from "./components/displayComponents/buttons/Buttons";
import Footers from "./components/displayComponents/footers/Footers";
import Forms from "./components/displayComponents/forms/Forms";
import Menus from "./components/displayComponents/menus/Menus";
import Specials from "./components/displayComponents/specials/Specials";

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
        <Route path='/buttons' element={<Buttons />} />
        <Route path='/footers' element={<Footers />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/menus' element={<Menus />} />
        <Route path='/specials' element={<Specials />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;

// mobile resposnive css
// make mail contact work
// make footer real¨
// layout Forum
// finish menu comp
// fix cogs
// fix menu delassus group
