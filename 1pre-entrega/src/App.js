import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import NavBar from './components/C-NavBar/NavBar';
import Inicio from './components/screens/Inicio';
import Contactanos from './components/screens/contactanos';
import Productos from './components/screens/productos';

function App() {
  return (
    <div className="App">
     <Router>
      <NavBar/>
     </Router>
    </div>
  );
}

export default App;
