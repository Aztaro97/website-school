import "./App.css";
import { BrowserRouter as Router,Switch,  Route } from "react-router-dom";

////////////   IMPORT ALL COMPONENTS   ////////////
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import PageNotFound from "./components/404/PageNotFund"
import HomePage from "./components/Home/home";
import ContactPage from "./components/contact/contact";
import AboutPage from "./components/about/about";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={PageNotFound} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
