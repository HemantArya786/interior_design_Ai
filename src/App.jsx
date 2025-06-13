// src/App.js
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";
import Signup from "./Signup";
import Home from "./Home";
import About from "./About";
import HowItwork from "./HowItwork";
import Contact from "./Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Search from "./Search";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about" element={<About />} />
        <Route path="/how-it-works" element={<HowItwork />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
