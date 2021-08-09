import './App.css';
import DefaultLayout from './layout/DefaultLayout';
import Dashboard from './pages/dashboard/Dashboard';
// import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      {/* <Login /> */}
      <DefaultLayout>
        <Dashboard />
      </DefaultLayout>
    </div>
  );
}

export default App;
