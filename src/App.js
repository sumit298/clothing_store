import React from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from './Pages/Shop/shop.component'
import Header from "./Components/Header/header.component";
import SignPage from "./Pages/SigninandSignup/sign.component";


function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign" component={SignPage}/>
      </Switch>
    </div>
  );
}

export default App;
