import React from 'react';
import Header from './components/Header';
import MiddleSection from './components/MiddleSection';
import Footer from './components/Footer';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />
      <MiddleSection />
      <Footer/>
    </div>
  );
}

export default App;
