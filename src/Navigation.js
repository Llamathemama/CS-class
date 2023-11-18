// Navigation.js
import React from 'react';
import { NavLink } from 'react-router-dom';
const Navigation = () => {
 return (
 <div>
 <NavLink to="/">| Home </NavLink>
 <NavLink to="/shoppingCart">| Shopping Cart </NavLink>
 <NavLink to="/checkout">| Checkout </NavLink>
 <NavLink to="/orderlookup">| Order Lookup |</NavLink>
 </div>
 );
}
export default Navigation;