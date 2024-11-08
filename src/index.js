import React from 'react';
import ReactDOM from 'react-dom/client';
import "@fortawesome/fontawesome-free/css/all.css"
// import "@fortawesome/fontawesome-free/css/style.min.css"
import './index.css';
import App from './App';
import Home from "./Home"
import Comp1 from './Comp1';
import "bootstrap/dist/css/bootstrap.css"
import Todo from './Todo';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import About from './components/About';
// import { Form } from 'react-router-dom';
import Form from "./components/Form"
import Table from './components/Table';
import Notfound from './components/Notfound';
import Onetodo from './components/Onetodo';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='comp' element={<Comp1/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='todo/:id'  element={<Onetodo/>}/>
      <Route path='todo' element={<Todo/>}/>
      <Route path='*' element={<Notfound/>} />
      
    </Routes>
    </BrowserRouter>
    {/* <App /> */}
    {/* <Home/>
    <Comp1/> */}
    {/* <Todo/> */}
    {/* <Form/> */}

    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
