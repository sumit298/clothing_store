import React from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = ()=>{
  return (
    <div>
      <h1>HatsPage</h1>
    </div>
  )
}

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop/hats" component={HatsPage}/>
      </Switch>
    </div>
  );
}

export default App;
