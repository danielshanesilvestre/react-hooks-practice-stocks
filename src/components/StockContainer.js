import React from "react";
import Stock from "./Stock";

function StockContainer({
  stocks,
  addStockToPortfolio
}) {


  const stockComponents = stocks.map(stock => {
    function handleClick() {
      addStockToPortfolio(stock.id);
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
      <h2>Stocks</h2>
      {stockComponents}
    </div>
  );
}

export default StockContainer;
