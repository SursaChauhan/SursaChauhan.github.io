import logo from './logo.svg';
import './App.css';
import Navbar from './Components/NavbarSection/Navbar'
import HomeSection from './Components/HomeSection/Home';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div id='main_wrapper'>
        <HomeSection />
       
      </div>
    </div>
  );
}

export default App;
