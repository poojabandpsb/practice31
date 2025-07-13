import Home from './pages/home';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Login from './pages/login';
import Register from './pages/register';
import 'react-toastify/dist/ReactToastify.css'
import Navbar from './components/navbar';
import { useSelector } from 'react-redux';
import HomePage from './pages/homepage';
import Order from './pages/order';
import ThankYou from './pages/thankyou';
import OrderHistory from './pages/order-history';
import Profile from './pages/profile';
import CartPage from './pages/cartpage';
import ProductDetailPage from './pages/productdetailpage';


function App() {
  const user =useSelector((state)=> state.user)
  return (
    <div className='container-fluid'>
      { user.loginStatus &&  <Navbar/> }
      <div className='container'>
        <Routes>
        <Route path='/' element={<HomePage/>} />
        {/* <Route path='/' element={<Login />} /> */}
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
          <Route path='/home' element={<Home />} />
          <Route path='/homepage' element={<HomePage />} />
          <Route path='/order' element={<Order />} />
          <Route path='/thankyou' element={<ThankYou />} />
          <Route path='/order-history' element={<OrderHistory />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/cartpage' element={<CartPage />} />
          <Route path='/productdetailpage' element={<ProductDetailPage />} />
      </Routes>
    
        <ToastContainer />
        </div>
  </div>

  );
}

export default App;
