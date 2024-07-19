import React, { useContext, useEffect, useState } from 'react'
import { CoinContext } from '../../context/CoinContext'
import { Link } from 'react-router-dom'
import "./All.css"

const All = () => {
    const {allCoin, currency} = useContext(CoinContext);
    const [displayCoin, setDisplayCoin] = useState([]);

    useEffect(() => {
        setDisplayCoin(allCoin);
    },[allCoin])

  return (
    <div className='all'>
        <h1>Every <span>Coin Counts:</span> <br />  Your Ultimate Crypto <br /> Directory</h1>
        <div className="crypto-table all-table">
            <div className="all-layout">
            <p>#</p>
            <p>Coins</p>
            <p>Price</p>
            <p style={{textAlign: "center"}}>24H Change</p>
            <p className='market-cap-all'>Market Cap</p>
            <p className='ath ath-pr'>ATH</p>
            <p className='ath'>ATH Change %</p>
            <p className='last'>Last Updated</p>
            </div>
            {
            displayCoin.map((item, index)=>(
                <Link to={`/coin/${item.id}`} className="all-layout" key={index}>
                    <p>{item.market_cap_rank}</p>
                    <div>
                        <img src={item.image} alt="" />
                        <p>{item.name + " - " + item.symbol}</p>
                    </div>
                    <p>{item.current_price.toLocaleString()} {currency.symbol}</p>
                    <p className={item.price_change_percentage_24h>0 ? "green" : "red"}>
                        {Math.floor(item.price_change_percentage_24h*100)/100}
                    </p>
                    <p className='market-cap-all'>{item.market_cap.toLocaleString()} {currency.symbol}</p>
                    <p className='ath ath-pr'>{item.ath.toLocaleString()} {currency.symbol}</p>
                    <p className={item.ath_change_percentage>0 ? "green ath" : "red ath"}>
                        {Math.floor(item.ath_change_percentage*100)/100}
                    </p>
                    <p className='last'>{item.last_updated.toLocaleString().slice(0, 10)}</p>
                </Link>
            ))
            }
      </div>
    </div>
  )
}

export default All