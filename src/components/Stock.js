import React from "react";

function Stock({
  name,
  price,
  ticker,
  onClick
}) {

  function handleClick() {
    console.log("In Stock: Registered click!")
    onClick();
  }

  return (
    <div>
      <div className="card" onClick={handleClick}>
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <p className="card-text">{ticker}: {price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;
