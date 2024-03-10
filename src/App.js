
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import { ToastContainer } from 'react-toastify';
import LandmarkAll from './landmarkAll';
import User from './user';
import Alluser from './Alluser';

function App() {
  return (
    <div className="App">
      <ToastContainer theme='colored' position='top-center'></ToastContainer>
      <BrowserRouter>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/landmarkAll' element={<LandmarkAll/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/alluser' element={<Alluser/>}></Route>
      </Routes>
      
      </BrowserRouter>
      
    </div>
  );
}

export default App;
