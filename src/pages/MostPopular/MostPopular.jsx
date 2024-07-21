import React, { useContext, useEffect, useState } from 'react';
import { CoinContext } from '../../context/CoinContext';
import './MostPopular.css';
import { Link } from 'react-router-dom'


const TrendingCoins = () => {
  const { allCoin, currency } = useContext(CoinContext);
  const [trendingCoins, setTrendingCoins] = useState([]);

  useEffect(() => {
    const fetchTrendingCoins = async () => {
      const trending = allCoin.sort((a, b) => b.market_cap - a.market_cap).slice(0, 12);
      setTrendingCoins(trending);
    };

    fetchTrendingCoins();
  }, [allCoin]);

  return (
    <div className='trending-coins'>
      <h1>Top <span>Trending Cryptos</span> <br />  of the Moment</h1>
      <div className='coins-list'>
        {trendingCoins.map(coin => (
          <Link to={`/coin/${coin.id}`} key={coin.id} className='coin-card'>
            <img src={coin.image} alt={coin.name} />
            <h2>{coin.name} ({coin.symbol.toUpperCase()})</h2>
            <p>Current Price: <br /> {coin.current_price.toFixed(2)} {currency.symbol}</p>
            <p>Market Cap: <br /> {coin.market_cap.toLocaleString()} {currency.symbol}</p>
            <p>24h Change: <span className={coin.price_change_percentage_24h>0 ? "green" : "red"}>{coin.price_change_percentage_24h.toFixed(2)}%</span></p>
            <p>All time high: {coin.ath} {currency.symbol}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TrendingCoins;
