import './App.css';
import SignUp from './components/signUpComponent/SignUp';
import Login from './components/loginComponent/Login';
import Display from './components/displayComponent/Display';

function App() {
  return (
    <div className="App">
      <Login />
      <SignUp />
      <Display />
    </div>
  );
}

export default App;
