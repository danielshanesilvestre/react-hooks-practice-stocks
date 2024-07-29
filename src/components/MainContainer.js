import React, {useState, useEffect} from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portfolio, setPortfolio] = useState([]);
  
  const [search, setSearch] = useState({
    sort: "",
    filter: ""
  });

  useEffect(() => {
    fetch("http://localhost:3001/stocks")
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setStocks(data);
      });
  }, []);

  function addStockToPortfolio(stockId) {
    if (portfolio.find(stock => stock.id === stockId) !== undefined) return;
    const stock = stocks.find(stock => stock.id === stockId);
    setPortfolio(portfolio => {
      return [
        ...portfolio,
        stock
      ];
    });
  }
  function removeStockFromPortfolio(stockId) {
    setPortfolio(portfolio => {
      return portfolio.filter(stock => stock.id !== stockId);
    });
  }

  function applySearch(stocks) {
    return stocks.filter(
      stock => {
        return search.filter === "" || stock.type === search.filter;
      }
    ).sort((stockA, stockB) => {
      switch (search.sort) {
        case "Alphabetically":
          return stockA.ticker.localeCompare(stockB.ticker);
        case "Price":
          return stockA.price - stockB.price;
        default:
          return 0;
      }
    });
  }

  return (
    <div>
      <SearchBar search={search} setSearch={setSearch}/>
      <div className="row">
        <div className="col-8">
          <StockContainer
            stocks={applySearch(stocks)}
            addStockToPortfolio={addStockToPortfolio}
          />
        </div>
        <div className="col-4">
          <PortfolioContainer
            stocks={applySearch(portfolio)}
            removeStock={removeStockFromPortfolio}
          />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
