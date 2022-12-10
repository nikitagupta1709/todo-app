import './App.css';
import { AllRoutes } from './components/routes/AllRoutes';
import { SideNavbar } from './components/sideNavbar/SideNavbar';

function App() {
  return (
    <div className="app">
      <div className='mainDiv'>
        <SideNavbar />
        <AllRoutes />
      </div>
    </div>
  );
}

export default App;
