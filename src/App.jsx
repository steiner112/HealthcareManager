import Header from './components/Header.jsx';
import './App.css';
import React from 'react';
import Footer from './components/Footer.jsx';
import ServiceForm from './Forms/ServiceForm.jsx';

function App() {
  return (
    <> 
        <Header/>
        <ServiceForm/>
        <Footer/>  
    </>
  );
}

export default App;
