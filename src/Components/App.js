import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./NavigationBar";
import Home from "./Home";
import Missions from "./Missions";
import Mercs from "./Mercs";
import Jobs from "./Jobs";
import Weapons from "./Weapons";
import Background from "../images/background_image.jpg";

var sectionStyle = {
  width: "100vw",
  height: "100vh",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  backgroundImage: `url(${Background})`,
};

function App() {
  return (
    <div className="App" style={sectionStyle}>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/mercs">
            <Mercs />
          </Route>
          <Route path="/guns/:mercId">
            <Weapons />
          </Route>
          <Route path="/guns">
            <Weapons />
          </Route>
          <Route path="/jobs/:mercId">
            <Jobs />
          </Route>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/missions">
            <Missions />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
