import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Error from './Pages/Error'
import Lodging from './Pages/Lodging'
import Footer from './componants/Footer';
import GlobalStyle from './utils/style/GlobalStyle'
import { DataProvider } from './utils/fetch';
import './utils/style/global.scss'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <GlobalStyle />
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/A-propos" element={ <About />} />
          <Route path="/Logements/:id" element={ <Lodging />} />
          <Route path="*" element= { <Error />} />
        </Routes>
        <Footer />
      </DataProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

