import React from 'react';
import './App.css';
import Navbar from './Component/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Pages/Home';
import Menu from './Pages/Menu';
import Cart from './Pages/Cart';
import UploadItems from './Admin/Upload';
import Updateitems from './Admin/Update';
import EditItems from './Admin/Edit';

function App() {
  return (
   <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}>Home</Route>
      <Route path='Menu/' element={<Menu/>}>Menu</Route>
      <Route path='Cart/' element={<Cart/>}>Cart</Route>
      <Route path='/admin/upload' element={<UploadItems/>}/>
      <Route path='/admin/update' element={<Updateitems/>}/>
      <Route path='/admin/edititems/:id' element={<EditItems />} loader={({ params }) => fetch(`http://localhost:5000/updatefood/${params.id}`)}/>
    </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
