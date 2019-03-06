import React from "react";

export default ({ item, value }) => {
  const { img, id, price, total, count, title } = item;
  const { increment, decrement, removeItem } = value;
  return (
    <div className="row my-2 text-capitalize text-center ">
      <div className="col-10 col-lg-2 mx-auto">
        <img
          src={img}
          alt="products"
          style={{ width: "5rem", height: "5rem" }}
        />
      </div>

      <div className="col-10 col-lg-2 mx-auto">{title}</div>
      <div className="col-10 col-lg-2 mx-auto">{price}</div>
      <div className="col-10 col-lg-2 mx-auto my-2">
        <div className="d-flex justify-content-center">
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              decrement(id);
            }}
          >
            -
          </span>
          <span className="btn btn-black mx-1">{count}</span>
          <span
            className="btn btn-black mx-1"
            onClick={() => {
              increment(id);
            }}
          >
            +
          </span>
        </div>
      </div>
      <div className="col-10 col-lg-2 mx-auto">
        <div
          className="cart-icon"
          onClick={() => {
            removeItem(id);
          }}
        >
          <i className="fas fa-trash" />
        </div>
      </div>

      <div className="col-10 col-lg-2 mx-auto">
        <strong>item total:${total}</strong>
      </div>
    </div>
  );
};
