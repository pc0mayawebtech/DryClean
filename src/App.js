import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Home from './modules/homepage/Home';
import Choosen from './modules/why-choose-us/Choosen';
function App() {
  return (
    <>
      <>
        <Navbar />
        <Home />
        <Choosen />
      </>
    </>
  );
}

export default App;
