// App.js
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './Home';
import ShoppingCart from './shoppingcart';
import Checkout from './Checkout';
import Thankyou from './Thankyou';
import Navigation from './Navigation';
import Footer from './Footer';
import OrderLookup from './OrderLookup';
import Error from "./error";
// App Component
class App extends Component {
 render() {
 return (
 <Router>
 <div>
 <Navigation />
 <Routes>
 <Route path='/' element={<Home />} />
 <Route path='/shoppingCart' element={<ShoppingCart />} />
 <Route path='/checkout' element={<Checkout />} />
 <Route path='/orderlookup' element={<OrderLookup />} />
 <Route element={<Error />} />
 </Routes>
<Footer />
 </div>
 </Router>
 );
 }
}
export default App;
