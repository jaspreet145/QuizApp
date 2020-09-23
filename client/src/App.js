import React, { Fragment, useState } from "react";
import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import Homenav from "./components/HomeHeader.component";
import Loginnav from "./components/LoginNav.component";
import Taketest from "./components/TakeTest.component";
import Login from "./components/LoginRegister.component";
import dashboard from "./components/Dashboard.component";
import Testresult from "./components/TestResult.component";
import Ques from "./components/Question.component";

function App() {
  const [loggedin, setloggedin] = useState(false);

  let location = useLocation();
  return (
    <React.Fragment>
      <nav>
        {location.pathname != "/test" ? (
          loggedin ? (
            <Loginnav setloggedin={setloggedin} />
          ) : (
            <Homenav setloggedin={setloggedin} />
          )
        ) : (
          <Fragment></Fragment>
        )}
      </nav>
      <main>
        <Switch>
          <Route exact path="/" component={Taketest} />
          <Route
            exact
            path={["/login", "/register"]}
            render={() => <Login setloggedin={setloggedin} />}
          />
          <Route exact path="/dashboard" component={dashboard} />
          <Route exact path="/abouttest" component={Testresult} />
          <Route exact path="/test" component={Ques} />
          <Route render={() => <Redirect to="/" />} />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
