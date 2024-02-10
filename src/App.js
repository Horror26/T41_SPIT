import "./App.css";
import GoogleAuth from "./auth/GoogleAuth";
import Navbar from "./common/Navbar";
import Contact from "./pages/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GoogleAuth />
      {/* <Contact /> */}
    </div>
  );
}

export default App;
