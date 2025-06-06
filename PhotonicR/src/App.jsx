import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Reactors from "./pages/Reactors";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import "./App.css";

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/reactors" element={<Reactors />} />
          <Route path="/achievement" element={<Achievements />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
