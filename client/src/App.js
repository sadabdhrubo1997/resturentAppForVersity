import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Login from './Pages/LoginPage/Login';
import NotFound from './Pages/NotFoundPage/NotFound';
import Registration from './Pages/RegistrationPage/Registration';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Login}/>
        <Route exact path="/registration" component={Registration}/>
        <Route component={NotFound}/>
      </Switch>
    </Router>
  );
}

export default App;
