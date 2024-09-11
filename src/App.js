import React from 'react';
import Routes from './routes';
import Header from './components/Header';
import Footer from './components/Footer'; 
import './App.css'


const App = () => {
  return (
    <div>
      <Header />
      <Routes />
      <Footer />
    </div>
  );
};

export default App;
