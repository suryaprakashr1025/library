import logo from './logo.svg';
import './App.css';
import library from './library.jpg';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Topbar from './Topbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Booklist from './Booklist';
import Addbooklist from './Addbooklist';
import Update from './Update';
import { useEffect } from 'react';


function App() {

    return (
    <>
    <BrowserRouter>
    <Topbar></Topbar>
      <Routes>
         <Route path="/booklist" element={<Booklist></Booklist>}> </Route> 
         <Route path="/booklist/addbook" element={<Addbooklist></Addbooklist>}> </Route> 
         <Route path="/booklist/:id" element={<Update></Update>}> </Route> 
      </Routes>
    </BrowserRouter>
      
    </>
  );
}

export default App;
