import React, { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/shopPage.component";
import Header from "./Components/Header/header.components";
import SignPage from "./Pages/SignIn_And_SignOut/sign.component";
import { auth } from "./Firebase/Firebase.utils";

function App() {
  const [users, setUsers] = useState({ currentUser: null });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      setUsers({ currentUser: user });
      // console.log(users.currentUser);
    });
    // Mimic componentWillUnmount Method 
    // Cleanup function
    return () => {
      unsubscribeFromAuth();
    };
  }, []);

  return (
    <div>
      <Header currentUser={users.currentUser} />
      <Switch>
        <Route path="/" component={Homepage} exact />
        <Route path="/shop" component={ShopPage} />
        <Route path="/sign" component={SignPage} />
      </Switch>
    </div>
  );
}

export default App;
