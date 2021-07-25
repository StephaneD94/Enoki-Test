import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles.css';

import Header from '../Header';
import Climbers from '../Climbers';
import News from '../News';
import Footer from '../Footer';

const App = () => {
  return (
      <div className="app">
        <Header />
        <Climbers />
        <News />
        <Footer />
      </div>
    );
  }
 
export default App;