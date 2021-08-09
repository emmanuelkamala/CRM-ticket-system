import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import AddTicket from './pages/add-ticket/AddTicket';
//import Dashboard from './pages/dashboard/Dashboard';
// import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <DefaultLayout>
        {/* <Dashboard /> */}
        <AddTicket />
      </DefaultLayout>
    </div>
  );
}

export default App;
