import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";

import { Route, Switch } from "react-router-dom";
import { useEffect, useState } from "react";

const Routes = () => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("@KenzieHub:token"));

    if (token) {
      setAuth(true);
    }
  }, [auth]);

  return (
    <Switch>
      <Route exact path="/">
        <Login auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/home">
        <Home auth={auth} setAuth={setAuth} />
      </Route>
      <Route path="/register">
        <Register auth={auth} />
      </Route>
    </Switch>
  );
};

export default Routes;
