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
  const [loginErrMsg, setLoginErrMsg] = useState("");
  const [loginVisible, setLoginVisible] = useState(false);

  const [logedInSignUpUser, setlogedInSignUpUser] = useState({ firstName: "", lastName: ""});

  const [signup, setSignup] = useState({ email: "", passWord: "", firstName: "", lastName: "" });

  
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Login login={login} setLogin={setLogin} setlogedInSignUpUser={setlogedInSignUpUser} logedInSignUpUser={logedInSignUpUser} setLoginErrMsg={setLoginErrMsg} loginErrMsg={loginErrMsg} setLoginVisible={setLoginVisible} loginVisible={loginVisible} />
          </Route>
          <Route path="/signup">
            <SignUp signup={signup} setSignup={setSignup} setlogedInSignUpUser={setlogedInSignUpUser} />
          </Route>
          <Route path="/welcomepage">
            <Display logedInSignUpUser={logedInSignUpUser}  />
          </Route>
        </Switch>
      </Router>
    </div>

  );
}

export default App;
