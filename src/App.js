import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './modules/homepage/Home';
import Choosen from './modules/why-choose-us/Choosen';
import Customer from './modules/customer-speak/Customer';
function App() {
  return (
    <>
      <>
        <Navbar />
        <Home />
        <Choosen />
        <Customer />
      </>
    </>
  );
}

export default App;
