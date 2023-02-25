import React, { Component } from "react";
import Menu from "./svg/bars-solid.svg";
import Close from "./svg/times-solid.svg";
import CartIcon from "./svg/shopping-cart-solid.svg";
import { NavLink } from "react-router-dom";
import "./css/Header.css";
import { DataContext } from "./Context";
import {Switch, Route, Redirect } from "react-router-dom";

import logo from "../assets/Logo_Ananas_Header.svg";

export class Header extends Component {
  static contextType = DataContext;

  state = {
    toggle: false,
  };

  menuToggle = () => {
    this.setState({ toggle: !this.state.toggle });
  };

  render() {
    const { toggle } = this.state;
    const { cart } = this.context;
    return (
      <header className="container">
        <div className="menu" onClick={this.menuToggle}>
          <img src={Menu} alt="" width="20" />
        </div>
        <div className="logo">
          <h1>
            <NavLink to="/">
              <img src={logo} alt=""/>
            </NavLink>
          </h1>
        </div>
        <Switch>
          <Route>
            <nav>
              <ul className={toggle ? "toggle" : ""} basename="/">
                <li>
                  <NavLink to="/">Home</NavLink>
                </li>
                <li>
                  <NavLink to="/product">Product</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
                <li>
                  <NavLink to="/about">About</NavLink>
                </li>
                <li>
                  <NavLink to="/login">Login / Register</NavLink>
                </li>
                <li className="close" onClick={this.menuToggle}>
                  <img src={Close} alt="" width="20" />
                </li>
              </ul>
              <div className="nav-cart">
                <span>{cart.length}</span>
                <NavLink to="/cart">
                  <img src={CartIcon} alt="" width="20" />
                </NavLink>
              </div>
            </nav>
            <Redirect exact from="/" to="/home" />
          </Route>
        </Switch>
      </header>
    );
  }
}

export default Header;
