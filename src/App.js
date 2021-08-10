import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Ticket from './pages/ticket/Ticket';
import AddTicket from './pages/add-ticket/AddTicket';
import TicketLists from './pages/ticket-listing/TicketLists';
import Dashboard from './pages/dashboard/Dashboard';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'><Login /></Route>
        <DefaultLayout>
          <Route path='/dashboard'><Dashboard /> </Route>
          <Route path='/add-ticket'><AddTicket /> </Route>
          <Route path='/tickets'><TicketLists /> </Route>
          <Route path='/ticket/:id'><Ticket /> </Route>
        </DefaultLayout>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
