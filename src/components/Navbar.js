import React, { Component } from "react";
import { Link } from "react-router-dom";
import img from "../logo.svg";
import styled from "styled-components";
import { ButtonContainer } from "./Button";
import { ProductConsumer } from "../Context";

export default class Navbar extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const { cart } = value;
          return (
            <NavWrapper className="navbar navbar-expand-sm   navbar-dark px-sm-5">
              <Link to="/">
                <img src={img} alt="logo" className="navbar-brand" />
              </Link>
              <ul className="navbar-nav align-items-center ">
                <li className="navbar-item ml-5">
                  <Link to="/" className="nav-link">
                    products
                  </Link>
                </li>
              </ul>

              <Link to="/cart" className="ml-auto">
                <ButtonContainer>
                  <span className="mr-2">
                    <i className="fas fa-cart-plus" />
                  </span>
                  {console.log("cart", cart, value)}
                  mycart{`(${cart ? cart.length : ""})`}
                </ButtonContainer>
              </Link>
            </NavWrapper>
          );
        }}
      </ProductConsumer>
    );
  }
}

const NavWrapper = styled.nav`
  background: var(--mainBlue);
  .nav-link {
    color: var(--mainWhite) !important;
    font-size: 1.3rem;
    text-transform: capitalize;
  }
`;
