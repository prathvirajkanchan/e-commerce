import React, { Component } from "react";
import { ProductConsumer } from "../Context";
import { Link } from "react-router-dom";
import { ButtonContainer } from "./Button";

export default class Details extends Component {
  render() {
    return (
      <ProductConsumer>
        {value => {
          const {
            id,
            company,
            img,
            info,
            price,
            title,
            inCart
          } = value.detailProduct;
          return (
            <div className="container py-5">
              <div className="row">
                <div className="col-10 mx-auto text-center my-5 text-blue">
                  <h1>{title}</h1>
                </div>
              </div>
              {/*product info*/}
              <div className="row">
                <div className="col-10 mx-auto col-md-6 my-3">
                  <img src={img} alt="Product" />
                </div>
                {/*product text*/}
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                  <h1>model:{title}</h1>
                  <h4 className="text-title text-muted mt-3 mb-3 text-uppercase">
                    made by:<span className="text-uppercase">{company}</span>
                  </h4>
                  <h4 className="text-blue">
                    <strong>
                      price : <sapan>$</sapan>
                      {price}
                    </strong>
                  </h4>
                  <p className=" text-capitalize font-weight-bold mt-3 mb-3">
                    some info about product:
                  </p>
                  <p className="text-muted lead ">{info}</p>
                  {/*buttons*/}
                  <div>
                    <Link to="/">
                      <ButtonContainer>back To Product</ButtonContainer>
                    </Link>
                    <ButtonContainer
                      disable={inCart ? true : false}
                      onClick={() => {
                        value.addToCart(id);
                      }}
                    >
                      {inCart ? "inCart" : "add to cart"}
                    </ButtonContainer>
                  </div>
                </div>
              </div>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}
