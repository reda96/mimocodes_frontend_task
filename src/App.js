import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PricesSection from "./components/PricesSection";
import Dashboard from "./components/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HeroSection} />
          <Route path="/prices" component={PricesSection} />

          <Route path="/dashboard" component={Dashboard} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
