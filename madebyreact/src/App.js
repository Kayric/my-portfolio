import Navbar from "./component/Navbar";
import Intro from "./component/Intro";
import Exp from "./component/Exp";
import "./App.css";
import Portfolio from "./component/Portfolio";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Exp />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
