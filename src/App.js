import React from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/shopPage.component";
import Header from "./Components/Header/header.components";
import SignPage from "./Pages/SignIn_And_SignOut/sign.component";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopPage}/>
        <Route path="/sign" component={SignPage}/>
      </Switch>
    </div>
  );
}

export default App;
