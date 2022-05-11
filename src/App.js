import "./App.css";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import ShoppingCart from "./Componentes/ShoppingCart/ShoppingCart";
import CartContextProvider from './CartContext/CartContext';

function App() {
  return (
  <CartContextProvider>
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home/> }/> 
        <Route path='/categoria/:categoryId' element={<ItemListContainer/> }/> 
        <Route path='/item/:id' element={<ItemDetailContainer/> }/> 
        <Route path='/shoppingcart' element={<ShoppingCart/> }/>  
      </Routes>
    </Router>
  </CartContextProvider>
  );
}

export default App;
