
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';
import { useState } from 'react';
import LoginPopUp from './Components/LoginPopUp/LoginPopUp';
import Cart from './Pages/Cart/Cart';
import Placeorder from './Pages/PlaceOrder/Placeorder';

function App() {
  const [showLogin,setShowLogin]=useState(false);
  return (
    <>
    {showLogin?<LoginPopUp setShowLogin={setShowLogin}/>:<></>}
    <div className="App">
      <Navbar setShowLogin={setShowLogin}/>
     
      { <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        {/* <Route path="/order" element={<Placeorder/>}></Route> */}
      </Routes> }
    </div>
    <Footer/>
    </>
  );
}

export default App;
