import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {StyledGlobalStyle} from './utils/style/StyledGlobalStyle'

import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import store from './app/store'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(    
  <Provider store={store} >
    <React.StrictMode>
      <Router>
        <StyledGlobalStyle />
        <Header />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='*' element={ <Home />} />
        </Routes>
        <Footer />
      </Router>
    </React.StrictMode>
  </Provider>    
);

