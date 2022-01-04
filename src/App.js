import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import Register from "./pages/Register/Register";
import Verification from "./pages/Register/Verification";

import Main from "./pages/Main/Main";
import Categories from "./pages/Nutrition/Categories";

import Meals from "./pages/Nutrition/Meals";
import Drinks from "./pages/Nutrition/Drinks";
import Snacks from "./pages/Nutrition/Snacks";
import Similars from "./pages/Nutrition/Similars";
import Description from "./pages/Nutrition/Description";


import Phase from "./pages/Phases/Phase";
// import Calendar from "./pages/Calendar/Calendar";
import PrePregnancy from "./pages/Calendar/PrePregnancy";
import Pregnancy from "./pages/Calendar/Pregnancy";
import PostPregnancy from "./pages/Calendar/PostPregnancy";


// import Spr from "./Spr"
// import TestSlider from "./TestSlider"
import Tss from "./Tss"
// import Test from "./Test"

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/register" component={Register} />
          <Route exact path="/verification" component={Verification} />

          <Route exact path="/" component={Main} />
          <Route exact path="/categories" component={Categories} />
          <Route exact path="/meals" component={Meals} />
          <Route exact path="/snacks" component={Snacks} />
          <Route exact path="/drinks" component={Drinks} />
          <Route exact path="/description" component={Description} />
          <Route exact path="/phase" component={Phase} />

          <Route exact path="/pre-pregnancy" component={PrePregnancy} />
          <Route exact path="/pregnancy" component={Pregnancy} />
          <Route exact path="/post-pregnancy" component={PostPregnancy} />
         
        </Switch>
      </Router>



      {/* <CardProvider> */}
      {/* <Meals /> */}
      {/* <Drinks /> */}
      {/* <Snacks /> */}
      {/* </CardProvider> */}

      {/* <MealContainer /> */}
    </div>
  );
}

export default App;
