import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './styles.css';

import Header from '../Header';
import Content from '../Content/Content';
import Footer from '../Footer';

const App = () => {
  return (
      <div className="app">
        <BrowserRouter>
          <Switch>
            <Route path="/" exact>
              <Header />
            </Route>
            <Route path="content">
              <Content />
            </Route>
          </Switch>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
 
export default App;