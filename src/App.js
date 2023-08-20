// import DynamicImport from "./Components/DynamicImport";
import { Suspense, lazy } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HOC from "./Components/HOC";
import CompA from "./Components/CompA";
import Controlled from "./Components/Controlled";
import UnControlled from "./Components/UnControlled";
// import SimpleImport from './Components/SimpleImport';

const Home = lazy(() => import("./Pages/Home"));
const About = lazy(() => import("./Pages/About"));
const Products = lazy(() => import("./Pages/Products"));
const Testimonials = lazy(() => import("./Pages/Testimonials"));

function App() {
  return (
    <div className="App">
      {/* <DynamicImport/> */}
      {/* <SimpleImport/> */}
      {/* <Suspense fallback={<h2>.....Loading</h2>}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/products" element={<Products />}></Route>
            <Route path="/testimonials" element={<Testimonials />}></Route>
          </Routes>
        </BrowserRouter>
      </Suspense> */}

      {/* <CompA dark/>
      <CompA light/> */}

      <Controlled/>
      <UnControlled/>
    </div>
  );
}

export default App;
