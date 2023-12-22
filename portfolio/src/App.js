import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar/Navbar';
import { ThemeProvider } from './ThemeContext';
const lightTheme = {
  navbarBg: 'red',
  navbarText: '#333',
};

const darkTheme = {
  navbarBg: 'black',
  navbarText: '#fff',
};

function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <Navbar toggleTheme={toggleTheme} />
  </ThemeProvider>
  );
}

export default App;
