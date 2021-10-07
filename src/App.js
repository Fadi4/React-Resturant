import React, { Component } from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {Globalstyle} from './globalstyle';
import Hero from './components/Hero/Hero';
import Products from './components/Products';
import {productData,productDataTwo} from './components/Products/data'
import Feature from './components/Features';
import Footer from './components/Footer';


class App extends Component{
  render(){
    return(
      <Router>
        <Globalstyle/>
        <Hero/>
        <Products heading='choose your favorite' data={productData}/>
        <Feature/>
        <Products heading='Sweet Treats for you' data={productDataTwo}/>
        <Footer/>
    </Router>
    )
  }
}

export default App;
