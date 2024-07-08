import "../App.css";
import Navbar from "./Navbar";
import Home from "./Pages/Home";
import Footer from "./Footer";
import Skills from "./Pages/Skills";
import Contact from "./Pages/Contact";

function App() {
  return (
    <div className="app-div app-content">
      <Navbar></Navbar>
      <Home></Home>
      <Skills></Skills>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
}

export default App;
