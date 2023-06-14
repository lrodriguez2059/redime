import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './App.css';
import './components/Navigation';
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import Navigation from './components/Navigation';
import Materiales from './components/Materiales';


function App() {
  return (
   <Router>
    <Navigation/>
    <Routes>
      
    <Route path="/" exact element={<Materiales/>} />
   <Route path="/materiales" exact element={<Materiales/>} />
 
    </Routes>


   </Router>
  );
}

export default App;
