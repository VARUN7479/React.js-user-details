import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Parent from './Components/Parent';
import Event from './Components/Event';
import DefferFunc from './Components/DefferFunc';
import Compnt from './Components/Compnt';
import Conditional from './Components/Conditional';
import Even from './Components/Even';
import Carlist from './Components/Carlist';
import Constnames from './Components/Constnames';
import Hookcount from './Components/Hookcount';
// import UseEffect from './Components/UseEffect';
import Home from './Components/Home';
import About from './Components/About';
import Contacts from './Components/Contacts';
import Usecontext from './Components/Usecontext';
import REFhook from './Components/REFhook';
import ToDoList from './Components/ToDoList';
import Task from './Components/Task'
import UserForm from './Components/UserForm';
import UserDetails from './Components/UserDetails';




function App() {

  return (
    <Router>
      <>
      <Routes>
        <Route path='/' element={<UserForm/>}/>
        <Route path='/v' element={<UserDetails/>}/>
      </Routes>
      
      </>
    </Router>
    

  );
}

export default App;
