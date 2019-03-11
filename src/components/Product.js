import React, { Component } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { ProductConsumer } from "../Context";

export default class Product extends Component {
  render() {
    const { id, title, img, price, inCart, comments } = this.props.product;
    return (
      <ProductWrapper className="col-9 mx-auto col-md-6 col-lg-3 my-3">
        <div className="card">
          <ProductConsumer>
            {value => (
              <div>
                <div
                  className="img-container p-5"
                  onClick={() => {
                    value.handleDetails(id);
                  }}
                >
                  <Link to="/details">
                    <img src={img} alt="img" className="card-img-top" />
                  </Link>

                  <button
                    className="cart-btn"
                    disable={inCart ? true : false}
                    onClick={() => {
                      inCart ? value.removeItem(id) : value.addToCart(id);
                    }}
                  >
                    {inCart ? (
                      <span className="text-capitalized md-0" disable>
                        Remove Cart
                      </span>
                    ) : (
                      <i className="fas fa-cart-plus" />
                    )}
                  </button>
                </div>

                <div className="card-footer d-flex justify-content-between">
                  <p className=" mb-0">{title}</p>

                  <p>{value.average(comments).averageValue} ⭐</p>

                  <h5 className="text-blue mb-0 font-italic">
                    <span className="mb-0">${price}</span>
                  </h5>
                </div>
              </div>
            )}
          </ProductConsumer>
        </div>
      </ProductWrapper>
    );
  }
}
const ProductWrapper = styled.div`
  .card {
    border-color: transparent;
    transition: all 1s linear;
  }

  .card-footer {
    background: transparent;
    border-top: transparent;
    transition: all 1s linear;
  }

  .img-container {
    position: relative;
    overflow: hidden;
  }

  .card-img-top {
    transition: all 1s linear;
  }
  .img-container:hover .card-img-top {
    transform: scale(1.2);
  }

  .cart-btn {
    outline: none;
    position: absolute;
    bottom: 0;
    right: 0;
    border: none;
    background: var(--lightBlue);
    color: var(--mainWhite);
    padding: 0.2rem 0.4rem;
    font-size: 1.4rem;
    border-radius: 0.5rem 0 0 0;
    transform: translate(100%, 100%);
  }

  .img-container:hover .cart-btn {
    border: none;
    transform: translate(0, 0);
    cursor: pointer;
    color: var(--mainBlue);
  }
`;
