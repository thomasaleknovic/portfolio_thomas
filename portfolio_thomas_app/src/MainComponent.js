import { Route, Routes } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./Home";
import Portfolio from "./Portfolio";
import Tecnologias from './Tecnologias';


function Main() {
  return (
    <div className="App">
      
      {/* <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tecnologias" element={<Tecnologias />} />
        
      </Routes> */}
      <Header  />
      <div className="bg-gradient-to-t from-mainPurple/10 to-mainBlack h-full">
        <Home />
        <Tecnologias />
        <Portfolio />
      </div>
    
    </div>
  );
}

export default Main;
