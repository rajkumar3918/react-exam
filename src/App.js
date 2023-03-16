import logo from './logo.svg';
import './App.css';

import { Route, Routes } from 'react-router-dom';
import Register from './pages/register';
import Login from './pages/login';

function App() {
  return (
    <div className="App">
     <Routes>
      <Route index element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
     </Routes>
    </div>
  );
}

export default App;
