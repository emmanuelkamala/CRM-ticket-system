import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css';
import Ticket from './pages/ticket/Ticket';
import AddTicket from './pages/add-ticket/AddTicket';
import TicketLists from './pages/ticket-listing/TicketLists';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';
import PrivateRoute from './components/private-route/PrivateRoute';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Login /></Route>
          <PrivateRoute path='/dashboard'><Dashboard /> </PrivateRoute>
          <PrivateRoute path='/add-ticket'><AddTicket /> </PrivateRoute>
          <PrivateRoute path='/tickets'><TicketLists /> </PrivateRoute>
          <PrivateRoute path='/ticket/:id'><Ticket /> </PrivateRoute>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
