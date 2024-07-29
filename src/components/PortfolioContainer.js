import React from "react";
import Stock from "./Stock";

function PortfolioContainer({
  stocks,
  removeStock
}) {
  const stockComponents = stocks.map(stock => {
    function handleClick() {
      removeStock(stock.id);
    }

    return <Stock
      key={stock.id}
      name={stock.name}
      price={stock.price}
      ticker={stock.ticker}
      onClick={handleClick}
    />
  });

  return (
    <div>
      <h2>My Portfolio</h2>
      {stockComponents}
    </div>
  );
}

export default PortfolioContainer;
