import "./App.css";
import GoogleAuth from "./auth/GoogleAuth";
import Navbar from "./common/Navbar";
import Contact from "./pages/Contact";
import Footer from "./common/Footer";
function App() {
  return (
    <div className="App">
      <Navbar />
      <GoogleAuth />
      {/* <Contact /> */}
      <Footer/>
    </div>
  );
}

export default App;
