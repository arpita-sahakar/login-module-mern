import './App.css';
import SignUp from './components/signUpComponent/SignUp';
import Login from './components/loginComponent/Login';
import Display from './components/displayComponent/Display';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

function App() {
  return (

    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/welcomepage" component={Display} />
        </Switch>
      </Router>
    </div>

  );
}

export default App;
