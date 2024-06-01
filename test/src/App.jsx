import React from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Pages/auth/Product';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Layout from './Pages/Layout';


function App() {
  return (
    <React.Fragment>
      <Router>
        <Layout>
          <Routes>
            <Route exact path='/' element={<Product />} />

          </Routes>
        </Layout>
      </Router>
    </React.Fragment>
  );
}

export default App;
