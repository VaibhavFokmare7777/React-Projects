
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <Home/>
      {/* <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/order" element={<PlaceOrder/>}></Route>
      </Routes> */}
    </div>
    <Footer/>
    </>
  );
}

export default App;
