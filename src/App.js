import { useEffect } from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import useAuthModal from "./hooks/useAuthModal";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  const authModal = useAuthModal();

  useEffect(() => {
    if (localStorage.getItem("id")) {
      authModal.onOpen();
      console.log("llll");
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <div className="bg-gray-100 ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
