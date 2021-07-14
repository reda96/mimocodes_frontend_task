import "./App.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import PricesSection from "./components/PricesSection";
import Dashboard from "./components/Dashboard";
import Product1 from "./assets/cs-sm-600.jpg";
import Product2 from "./assets/images.jpg";
import Product3 from "./assets/IMHX2019_BoxPicking-Osaro-1170x877.jpg";
import Product4 from "./assets/MMCI-robotics-1120product.jpg";
import Product0 from "./assets/talking.jpg";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  const productsList = [
    {
      img: Product0,
      name: "Talking robot",
      desc: `NEW RELEASE?Mini talking robot,elaborate appearance,lovely modelling
        with a smooth metal surface body ,make it more texture and ensure the
        safety when children playing with him You can tap robot's button twice
        to turn on his eyes will light up with light music sound effects.`,
    },
    {
      img: Product1,
      name: "Cable Saver",
      desc: `Cable protection systems for dynamic applications are the core 
      business of REIKU. We are the North American market leader in the field of robotics.
       We have positioned ourselves as a prime
       seller who has been very innovative in enhancing new possibilities.`,
    },

    {
      img: Product2,
      name: "Sustainable Manufacturing",
      desc: `Improving Sustainable Manufacturing
Robots are being used in different types of manufacturing to create more efficiency with fewer resources.
 Robots reduce errors, so less waste is produced. One computer company is relying on robots to pick reusable parts out of recycled products.
  This type of manufacturing sustainability includes recycling, reusing, and reducing. 
Less waste is produced and the robots are able to find and separate the small parts more efficiently than human hands can.`,
    },
    {
      img: Product3,
      name: "Stretch Robot",
      desc: `Stretch is Boston Dynamics’ first commercial robot specifically designed for warehouse facilities and
       distribution centers, of which there are more than 150,000 globally, according to analysts. The multi-purpose mobile
        robot is designed to tackle a number of tasks where rapid box moving is required, first starting with truck unloading 
        and later expanding into order building. Stretch’s technology builds upon Boston Dynamics’ decades of advancements in robotics to create a flexible, easily-integrated solution that can work in any warehouse to increase their flow of goods,
       improve employee safety in physically difficult tasks and lower expensive fixed automation costs.`,
    },
  ];
  return (
    <div className="App">
      <Router>
        <Navbar />

        <Switch>
          <Route exact path="/" component={HeroSection} />
          <Route path="/prices" component={PricesSection} />

          <Route
            path="/dashboard"
            render={(props) => <Dashboard {...props} list={productsList} />}
          />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
