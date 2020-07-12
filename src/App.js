import React from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/shopPage.component";
import Header from "./Components/Header/header.components";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
