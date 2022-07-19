import React, { useEffect, useState } from "react";
import { Sparklines, SparklinesLine } from "react-sparklines";
import axios from "axios";

const CoinPage = () => {
  const [coin, setCoin] = useState({});
  const url =
    "https://api.coingecko.com/api/v3/coins/bitcoin?tickers=false&sparkline=true";
  useEffect(() => {
    axios.get(url).then((response) => {
      setCoin(response.data);
      console.log(response.data);
    });
  }, [url]);
  return (
    <div>
      <div>
        <img src={coin.image?.large} alt="/" />
        <div>
          <p>{coin?.name} price</p>
          <p>({coin.symbol?.toUpperCase()} /usd)</p>
        </div>
      </div>
      <div>
        <div>
          <div>
            {coin.market_data?.current_price ? (
              <p>${coin.market_data.current_price.usd.toLocaleString()}</p>
            ) : null}
            <p>7 Day</p>
          </div>
          <div>
            <Sparklines data={coin.market_data?.sparkline_7d.price}>
              <SparklinesLine color="teal" />
            </Sparklines>
          </div>
          /*MARKET CAP NEED TO FINISH */
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
