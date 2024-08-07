import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Signup from './Components/Signup';

function App() {
  const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
      <Routes>
        <Route path ='/register' element={<Signup/>}></Route>
        <Route path ='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App