import React, { useState, useEffect } from "react";
import Homepage from "./Pages/Homepage/homepage.component";
import { Route, Switch } from "react-router-dom";
import ShopPage from "./Pages/ShopPage/shopPage.component";
import Header from "./Components/Header/header.components";
import SignPage from "./Pages/SignIn_And_SignOut/sign.component";
import { auth, createUserProfileDocument } from "./Firebase/Firebase.utils";

function App() {
  const [users, setUsers] = useState({ currentUser: null });

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      // Checking If userAuth returned from auth is not null
      if (userAuth) {
        // createUserProfileDocument function return userRef
        const userRef = await createUserProfileDocument(userAuth);
        // onSnapshot method returns actual data that saved in firestore
        userRef.onSnapshot((snapshot) => {
          // Setting state
          setUsers({
            currentUser: {
              id: snapshot.id,
              // Getting all data stored in firestore by calling data();
              ...snapshot.data(),
            },
          });
        });
      } else {
        // If user is logged out so setting its state to null
        setUsers({ currentUser: userAuth });
      }
    });

    return () => {
      // Mimic componentWillUnmount Method
      //   // Cleanup function
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
