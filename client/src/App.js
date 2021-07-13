import './App.css';
import SignUp from './components/signUpComponent/SignUp';
import Login from './components/loginComponent/Login';
import Display from './components/displayComponent/Display';
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  const [login, setLogin] = useState({ email: "", passWord: "" });
  const [logedInUser, setLogedInUser] = useState({ firstName: "", lastName: "" });
  const [LoginErrMsg, setLoginErrMsg] = useState("");
  const [signup, setSignup] = useState({ email: "", passWord: "", firstName: "", lastName: "" });
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login login={login} setLogin={setLogin} setLogedInUser={setLogedInUser} logedInUser={logedInUser} setLoginErrMsg={setLoginErrMsg} LoginErrMsg={LoginErrMsg} />
          </Route>
          <Route path="/signup">
            <SignUp signup={signup} setSignup={setSignup} />
          </Route>
          <Route path="/welcomepage">
            <Display logedInUser={logedInUser} />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
