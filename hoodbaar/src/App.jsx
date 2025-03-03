import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contacts from "./pages/Contacts.jsx";
import Gallery from "./pages/Gallery.jsx";
import Footer from "./components/Footer.jsx";

function App() {
    return (
        <Router>
            <Header className="navbar"/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/contacts" element={<Contacts />} />
                <Route path="/gallery" element={<Gallery />} />
            </Routes>
            <Footer className="footer"/>
        </Router>
    );
}

export default App;
