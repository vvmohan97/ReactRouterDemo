import './App.css';
import {BrowserRouter as Router , Route, Link, Routes} from "react-router-dom";
import { Home, HOME } from './Home';
import { About } from './About';
import { Contact } from './Contact';
function App() {
  return(
    <>
    <div className='maindiv'></div>

    
    <div>
    <Router>
      <main>
        <ul>
          <li><Link to="/">HOME</Link> </li>
          <li><Link to="/About">ABOUT</Link> </li>
          <li><Link to={"/Contact"}>CONTACT US</Link> </li>
        </ul>
   <Routes>
    <Route path='/' exact element={<Home/>}/>
    <Route path='/About' element ={<About/>}></Route>
    <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    
    </main>
    </Router>
    </div>
    
    </>   
  );
}

export default App;
