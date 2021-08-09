import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Ticket from './pages/ticket/Ticket';
//import AddTicket from './pages/add-ticket/AddTicket';
//import TicketLists from './pages/ticket-listing/TicketLists';
//import Dashboard from './pages/dashboard/Dashboard';
// import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        {/* <AddTicket /> */}
        {/* <TicketLists /> */}
        <Ticket />
      </DefaultLayout>
    </div>
  );
}

export default App;
