import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signin from './Components/Signin';
import Statebasics from './Components/Statebasics';
import Counter from './Components/Counter';
import Statebasicseg from './Components/Statebasicseg';

function App() {
  return (
    <div className="App">
     <Navbar/>
     {/* <Statebasicseg/> */}
     <Statebasics/>
{/* <Counter/> */}
     {/* <Routes>
      

      <Route path='/' element={<Login/>}/>
      <Route path='/sign' element={<Signin/>}/>
     
     </Routes> */}
    </div>
  );
}

export default App;
