import logo from './logo.svg';
import './App.css';
import { Router } from "@reach/router";
import SignIn from './components/SignIn';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <div className="App">
      <Router>
        <SignIn path="/" />
        <Dashboard path="/dashboard" />
      </Router>
    </div>
  );
}

export default App;
