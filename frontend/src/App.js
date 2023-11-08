import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Shop } from './Pages/Shop';
import { ShopCategory } from './Pages/ShopCategory'
import { Cart } from './Pages/Cart';
import { LoginSignup } from './Pages/LoginSignup';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path="/" element={<Shop />}/>
          <Route path="/featured" element={<ShopCategory category="featured"/>}/>
          <Route path="/recomended" element={<ShopCategory category="recomended"/>}/>
          {/* <Route path="/product" element={<Product/>}>
            <Route path=":productId" element={<Product/>}/>
          </Route> */}
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/login" element={<LoginSignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
