import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {StyledGlobalStyle} from './utils/style/StyledGlobalStyle'

import { Provider } from 'react-redux';
import { QueryClient, QueryClientProvider } from 'react-query'
import store from './app/store'

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import SignUp from './pages/SignUp'
import Login from './pages/Login'


//on créer le queryClient

const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <QueryClientProvider client={queryClient}>  
    <Provider store={store} >
      <React.StrictMode>
        <Router>
          <StyledGlobalStyle />
          <Header />
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/signup' element={<SignUp />} />
            <Route path='/login' element={ <Login />} />
          </Routes>
          <Footer />
        </Router>
      </React.StrictMode>
    </Provider>
  </QueryClientProvider>  
);

