import "./App.css";
import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";
import ShoppingCart from "./Componentes/ShoppingCart/ShoppingCart";
import FormBuy from "./Componentes/FormBuy/formBuy"
import OrderContainer from "./Componentes/OrderContainer/OrderContainer";
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
        <Route path='/formBuy' element={<FormBuy/> }/> 
        <Route exact path="/order/:id" element={<OrderContainer />} />
      </Routes>
    </Router>
  </CartContextProvider>
  );
}

export default App;
