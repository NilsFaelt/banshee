import "./App.css";
import DisplayModules from "./components/displayModules/DisplayModules";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/displayModules' element={<DisplayModules />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
