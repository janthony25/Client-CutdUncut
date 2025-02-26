
import { Children } from "react";
import HomePage from "./pages/HomePage";
import Header from "./pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer";
import ServicesPage from "./pages/ServicesPage";

function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<div className="pt-16">About Page</div>} />
          
        </Routes>
      </div>
      <Footer />
    </Router>
  )
}


export default App
