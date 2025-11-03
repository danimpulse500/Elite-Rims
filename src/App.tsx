import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home"
import About from "../src/pages/About"
import Service from "../src/pages/Service"


function Contact() {
  return <h1>Contact Page</h1>;
}

function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Service />} />
        </Routes>
    </Router>
  );
}

export default App;
