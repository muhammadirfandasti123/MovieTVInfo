import React from 'react';
import './App.css';

import {Provider} from 'react-redux'
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer'
import Landing from './components/home/Landing';

import {HashRouter as Router,Route} from 'react-router-dom'

import store from './store';
import  Movie  from './components/home/Movie';

function App() {
  return (
   <Provider store={store}>
     <Router>
       <div>
         <Navbar/>
         <Route exact path="/" component={Landing} />
         <Route exact path="/movie/:id" component={Movie} />
         <Footer/>
         </div>
      </Router>


    </Provider>
  );
}

export default App;
