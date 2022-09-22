import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Home";
import Contact from "./Contact";
import Layout from "./components/Layout/Layout";



function App() {
  return (

    <Layout>
      
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/Contact' element={<Contact/>}/>
        </Routes>
    </Layout>
  );
}

export default App;
