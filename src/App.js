import './App.css';
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/LoginPage/LoginPage';
import CreateAccount from './pages/CreateAccountPage/CreateAccount';
import Homepage from './pages/HomePage/Homepage';
import Product from './pages/ProductPage/Product';

function App() {
  return (
    <div className="App">
      <Routes>
     <Route path='/login' element={<LoginPage/>}/>
     <Route path='/Create Account' element={<CreateAccount/>}/>
     <Route path='/' element={<Homepage/>}/>
     <Route path='/Product/:id' element={<Product/>}/>
     
      </Routes>
    </div>
  );
}

export default App;
