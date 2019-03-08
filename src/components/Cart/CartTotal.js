import React from "react";
import { Link } from "react-router-dom";

export default ({ value }) => {
  const { cartTotal, clearCart, cartSubTotal, cartTax } = value;
  return (
    <React.Fragment>
      <div className="row">
        <div className="col-10 text-right text-capitalize">
          <Link to="/">
            <button
              className="btn btn-outline-danger text-uppercase mb-3 px-5"
              onClick={() => {
                clearCart();
              }}
            >
              clear cart
            </button>
          </Link>
          <h5>
            <span className="text-title">subtotal:</span>
            <strong>${cartSubTotal}</strong>
          </h5>
          <h5>
            <span className="text-title">tax:</span>
            <strong>${cartTax}</strong>
          </h5>
          <h5>
            <span className="text-title">total:</span>
            <strong>${cartTotal}</strong>
          </h5>
        </div>
      </div>
    </React.Fragment>
  );
};
