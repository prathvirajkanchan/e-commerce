import React from "react";

export default ({ name, title }) => {
  return (
    <div className=" col-10 text-title mx-auto  my-2 text-center">
      <h1 className="text-capitalize font-weight-bold">{name}</h1>
      <h1 className="text-blue">{title}</h1>
    </div>
  );
};
