import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppCars from "./pages/AppCars";
import AddCar from "./pages/AddCar";

function App() {
  return (
    <div>
      <Router>
        <nav className="navbar-expand-lg navbar-light bg-light">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/cars">
                  Cars
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/add">
                  Add Car
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/cars">
            <AppCars />
          </Route>
          <Route exact path="/add">
            <AddCar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
