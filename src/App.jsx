import "./App.css";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
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
import Menu from "./components/menu/Menu";
import { MenuIcon } from "@heroicons/react/outline";
import FooterOne from "./components/displayComponents/footers/footerOne/FooterOne";

function App() {
  const [user, setUser] = useState({});
  const [activateMenu, setActivateMenu] = useState(true);

  const closeMenu = () => {
    setActivateMenu(false);
    console.log("closes", activateMenu);
  };
  return (
    <div className='App'>
      <div onClick={() => closeMenu()}>
        <MenuIcon className='menuIcon' />
      </div>
      <Menu
        user={user}
        setUser={setUser}
        activateMenu={activateMenu}
        setActivateMenu={setActivateMenu}
      />
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
      <FooterOne />
      {/* <Footer /> */}
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
//buttons mobile
