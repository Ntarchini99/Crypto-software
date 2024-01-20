import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi';
import './Values.css';

const Values = () => {
    const [data, setData] = useState(null);
    const url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,DASH,LTC,XRP,ADA&tsyms=BTC,USD,EUR&api_key=INSERT-YOUR-API-KEY-HERE';

    useEffect(() => {
        axios
            .get(url)
            .then((response) => {
                setData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    if (!data) return null;

    return (
        <div className="featured" id='Values'>
            <div className="container">
                <div className="left">
                    <h2>Explore las principales criptomonedas como Bitcoin, Ethereum, Dash, ETC.</h2>
                    <p>Ver todos los activos disponibles: Criptomonedas y NFT</p>
                    <a href="https://es.tradingview.com/" target='blank'>
                        <button className="button">
                            VER GRÁFICOS
                            <svg fill="currentColor" viewBox="0 0 24 24" className="icon">
                                <path
                                    clipRule="evenodd"
                                    d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z"
                                    fillRule="evenodd"
                                ></path>
                            </svg>
                        </button>
                    </a>
                </div>

                <div className="right">
                    {Object.keys(data).map((cryptoSymbol, index) => (
                        <div className="card" key={index}>
                            <div className="top">
                                <img src={data[cryptoSymbol].image} alt="" />
                            </div>
                            <div>
                                <h5>{cryptoSymbol}</h5>
                                <p>${data[cryptoSymbol].USD}</p>
                            </div>
                            {data[cryptoSymbol].USD > 0 ? (
                                <span className="green">
                                    <FiArrowUpRight className="icon" />
                                    {data[cryptoSymbol].USD.toFixed(2)}%
                                </span>
                            ) : (
                                <span className="red">
                                    <FiArrowDown className="icon" />
                                    {data[cryptoSymbol].USD.toFixed(2)}%
                                </span>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Values;