import DynamicImport from "./Components/DynamicImport";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Testimonials from "./Pages/Testimonials";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import SimpleImport from './Components/SimpleImport';

function App() {
  return (
    <div className="App">
      {/* <DynamicImport/> */}
      {/* <SimpleImport/> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="./" element={<Home />}></Route>
          <Route path="./about" element={<About />}></Route>
          <Route path="./products" element={<Products />}></Route>
          <Route path="./testimonials" element={<Testimonials />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
