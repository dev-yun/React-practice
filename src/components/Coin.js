import { useEffect, useState } from 'react';

function Coin() {
  const [loadings, setLodings] = useState(true);
  const [coins, setCoins] = useState([]);
  const [moneys, setMoneys] = useState();
  const [coinIndex, setCoinIndex] = useState(0);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLodings(false);
      });
  }, []);

  const onChange = (event) => setMoneys(event.target.value);
  const changeCoin = (event) => {
    setCoinIndex(event.target.value);
  };

  return (
    <div>
      <h1>The Coins! {loadings ? '' : `(${coins.length})`}</h1>
      {loadings ? (
        <h4>Loading...</h4>
      ) : (
        <>
          <h4>현재 소지한 금액을 입력하세요.</h4>
          <input value={moneys} type={'number'} onChange={onChange}></input>
          <br />
          <select value={coinIndex} onChange={changeCoin}>
            {coins.map((coin, index) => (
              <option value={index}>
                {coin.name}({coin.symbol}) : {coin.quotes.USD.price} USD
              </option>
            ))}
          </select>
          <h4>
            현재 소유한 금액은 ${moneys} USD이고 {coins[coinIndex].name}{' '}
            {Math.floor(moneys) / Math.floor(coins[coinIndex].quotes.USD.price)}
            개를 구매할 수 있습니다.
          </h4>
        </>
      )}
    </div>
  );
}

export default Coin;
