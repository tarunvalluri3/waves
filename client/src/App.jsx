import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />

      <div className="pt-[70px] md:pt-[80px]">
         <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;