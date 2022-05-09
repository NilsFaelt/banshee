import "./App.css";
import DisplayModules from "./components/displayModules/DisplayModules";
import Header from "./components/header/Header";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/displayModules' element={<DisplayModules />} />
      </Routes>
    </div>
  );
}

export default App;
