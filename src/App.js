import { useEffect } from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import useAuthModal from "./hooks/useAuthModal";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Landing } from "./pages/Landing/Landing";
import About from "./pages/Landing/About";
import Transaction from "./pages/Transaction";
import { DashBoard } from "./pages/Dashboard/DashBoard";
import History from "./pages/History"
import { CibilScore } from "./pages/CibilScore";
function App() {
  const authModal = useAuthModal();

  useEffect(() => {
    if (localStorage.getItem("id")) {
      authModal.onOpen();
    }
    console.log(authModal.isOpen);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="bg-gray-100 ">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          {/* <Route path="/About" element={<About />} /> */}
          <Route path="/Transaction" element={<Transaction />} />
          <Route path="/Dashboard" element={<DashBoard />} />
          <Route path="/history" element={<History />} />
          <Route path="/cibil" element={<CibilScore />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
