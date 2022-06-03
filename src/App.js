import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from './Components/Navbar';
import AppFrame from './Components/AppFrame';
import DescFrame from './Components/DescFrame';

function App() {
  return (
    <BrowserRouter>
    <Navbar />
    
    <DescFrame />
    <div class='p-4'>
    <AppFrame /></div>
    
      
    
    </BrowserRouter>
  );
}

export default App;
