import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import TodoList from './components/TodoList';
import CarsList from './components/CarsList';
import FormComponents from './components/FormComponents';
import Appp from './components/home';
import Greetings from './components/FormComponents/greetings.js';
import FavouriteDessert from './components/FormComponents/favouriteDessert.js';
import VisitedCities from './components/FormComponents/visitedCities.js';
import YourState from './components/FormComponents/yourState.js';
import DisableButton from './components/FormComponents/disableButton.js';
import CountriesDashboardApp from './components/Covid/countriesDashboardApp.js';
export default function App() {
  return (
    <Router>
      <div>
        <Switch>
        <Route path="/DisableButton">
        <DisableButton />
        </Route>
        <Route path="/YourState">
        <YourState states={["Andhra Pradesh", "Telangana", "Tamil Nadu", "Kerala", "Karnataka", "Haryana"]}/>
        </Route>
        <Route path="/VisitedCities">
        <VisitedCities cities={["Hyderabad", "Chennai", "Bangalore", "Pune", "Mumbai", "Delhi"]}/>
        </Route>
        <Route path="/FavouriteDessert">
        <FavouriteDessert favouriteDesserts={["Vanilla", "Butterscotch", "Gulab Jamun", "Yoghurt Pots", "Baked Banana", "Chocolate"]}/>
        </Route>
        <Route path="/Greetings">
        <Greetings/>
        </Route>
        <Route path="/FormComponents">
            <FormComponents />
          </Route>
        <Route path="/CarsList">
            <CarsList />
          </Route>
          <Route path="/TodosList">
            <TodoList />
          </Route>
          <Route path="/CountriesDashboardApp">
            <CountriesDashboardApp />
          </Route>
        <Route path="/">
            <Appp/>
          </Route>

        </Switch>
      </div>
    </Router>
  );
}