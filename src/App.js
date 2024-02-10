import { useEffect } from "react";
import "./App.css";
import Navbar from "./common/Navbar";
import useAuthModal from "./hooks/useAuthModal";
import Contact from "./pages/Contact";
import Temp from "./common/Temp";

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
      <Temp />
    </div>
  );
}

export default App;
