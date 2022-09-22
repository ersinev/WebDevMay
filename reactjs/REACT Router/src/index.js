import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import App from './App';
import Contact from "./Contact";
import Notfound from './Notfound';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import BlogDetail from './BlogDetail';
import Blog from './Blog';

const TestFunction = ()=>[
  console.log('Test Function')
]

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <ul>
      <li><a href='/'>Homepage</a></li>
      <li><a href='/contact'>Contact</a></li>
      <li><a href='/blog'>Blog</a></li>
      <li><a href='/blog/5'>Blog Detail</a></li>
    </ul>
    <h1>This is static</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<App users={[2,3,4]} posts={[{id:1},{id:2}]}/>}/>
      <Route path='/contact' element={<Contact MyFunction={TestFunction}/>}/>
      <Route path='*' element={<Notfound/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/blog/:id' element={<BlogDetail/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

