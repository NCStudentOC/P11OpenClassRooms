import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { Home } from './Pages/Home';
import { Header } from './Components/Structure/Header/Header';
import { Footer } from './Components/Structure/Footer/Footer';

import { SignIn } from './Pages/SignIn';
import { User } from './Pages/User';
import PrivateRoute from './Components/Structure/PrivateRoute/PrivateRoute';



function App() {
  return (

    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/User" element={<PrivateRoute />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;
