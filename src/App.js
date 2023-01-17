import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import SignIn from "./pages/Authorization/SignIn";
import Register from "./pages/Authorization/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Store from "./pages/Store/Store";
import Footer from "./components/Footer";
import StoreItem from "./pages/Store/StoreItem";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <div className="appPages">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:id" element={<StoreItem />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
