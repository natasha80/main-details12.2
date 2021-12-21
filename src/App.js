import './App.css';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import ServiceList from './components/ServiceList';
import ServiceView from './components/ServiceView';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/services" />
        </Route>
        <Route exact path="/services" component={ServiceList} />
        <Route exact path="/services/:id/details" component={ServiceView} />
      </Switch>
    </Router>
  );
}

export default App;