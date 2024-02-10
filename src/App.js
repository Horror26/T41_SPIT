import { useEffect } from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import useAuthModal from "./hooks/useAuthModal";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";
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
      {/* <Contact /> */}
      <Footer/>
    </div>
  );
}

export default App;
