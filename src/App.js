import React from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/Shop/shop.component";
import Header from "./Components/Header/header.component";
import SignPage from "./Pages/SigninandSignup/sign.component";
import { auth } from "./Firebase/firebase.utils";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/sign" component={SignPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
