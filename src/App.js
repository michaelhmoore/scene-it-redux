import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import 'semantic-ui-css/semantic.min.css'
import { Menu } from 'semantic-ui-react';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <div className="App">
        <Menu />
        <nav>
          <Link to="/">Home</Link>
        </nav>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>

        </Switch>
      
      </div>
    </Router>
  );
}

export default App;
