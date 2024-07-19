  import React, { useContext, useEffect, useState } from 'react'
  import "./Coin.css"
  import { useParams } from 'react-router-dom'
  import { CoinContext } from '../../context/CoinContext';
  import LineChart from '../../components/LineChart/LineChart';

  const Coin = () => {

    const { coinId } = useParams();
    const [coinData, setCoinData] = useState();
    const [historicalData, setHistoricalData] = useState();

    const {currency} = useContext(CoinContext);

    const fetchCoinData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-c2BZnVNH6hFmhiEGiVXvU5af	'
        }
      };

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}`, options)
        .then(response => response.json())
        .then(response => setCoinData(response))
        .catch(err => console.error(err));
    }

    const fetchHistoricalData = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          'x-cg-demo-api-key': 'CG-c2BZnVNH6hFmhiEGiVXvU5af	'
        }
      };

      fetch(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=${currency.name}&days=10&interval=daily`, options)
        .then(response => response.json())
        .then(response => setHistoricalData(response))
        .catch(err => console.error(err));
    }

    useEffect(()=>{
      fetchCoinData();
      fetchHistoricalData();
    }, [currency])

    const getFirstThreeSentences = (text) => {
      const sentences = text.match(/[^.!?]+[.!?]+/g) || [];
      return sentences.slice(0, 3).join(' ');
    };

    if(coinData && historicalData){
      const description = coinData.description && coinData.description.en
        ? getFirstThreeSentences(coinData.description.en)
        : '';
      return (
        <div className='coin'>
          <div className="coin-name">
            <img src={coinData.image.large} alt="" />
            <p><b>{coinData.name} ({coinData.symbol.toUpperCase()})</b></p>
          </div>
          <div className='description'>
            {description}
          </div>
          <div className="coin-chart">
            <LineChart historicalData={historicalData} />
          </div>


          <div className="coin-info">
            <ul>
              <li>Crypto Market Rank</li>
              <li>{coinData.market_cap_rank}</li>
            </ul>
            <ul>
              <li>Current Price</li>
              <li>{coinData.market_data.current_price[currency.name].toLocaleString()} {currency.symbol}</li>
            </ul>
            <ul>
              <li>Market Cap</li>
              <li>{coinData.market_data.market_cap[currency.name].toLocaleString()} {currency.symbol}</li>
            </ul>
            <ul>
              <li>24H Hour High</li>
              <li>{coinData.market_data.high_24h[currency.name].toLocaleString()} {currency.symbol}</li>
            </ul>
            <ul>
              <li>24H Hour Low</li>
              <li>{coinData.market_data.low_24h[currency.name].toLocaleString()} {currency.symbol}</li>
            </ul>
          </div>

        </div>
      )
    }
    else{
      return (
        <div className='spinner'>
          <div className="spin"></div>
        </div>
      )
    }
    
  }

  export default Coin