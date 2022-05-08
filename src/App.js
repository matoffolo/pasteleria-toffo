import "./App.css";

import ItemListContainer from "./Componentes/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./Componentes/ItemDetailContainer/ItemDetailContainer";
import NavBar from "./Componentes/NavBar/NavBar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Componentes/Home/Home";

function App() {
  return (
    <Router>
      <NavBar />
     
      <Routes>
      <Route path='/' element={<Home/> }/> 
      <Route path='/categoria/:categoryId' element={<ItemListContainer/> }/> 
      <Route path='/item/:id' element={<ItemDetailContainer/> }/> 
      </Routes>
    </Router>
  );
}

export default App;
