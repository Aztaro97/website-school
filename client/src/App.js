import './App.css';
// import './components/css/style.css'
import Header from "./components/Header";
import Service from "./components/Service";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Players from "./components/Players"

// import "./components/css/donate.css"
// import "./components/css/theme.css"
// import "./components/css/"

function App() {
  return (
    <div className="App">
      <Header/>
      <About />
      <Service />
      <Players />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
