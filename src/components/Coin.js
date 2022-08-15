import { useEffect, useState } from 'react';

function Coin() {
  const [loadings, setLodings] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    fetch('https://api.coinpaprika.com/v1/tickers')
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLodings(false);
      });
  }, []);

  return (
    <div>
      <h1>The Coins!</h1>
      {loadings ? <h4>Loading...</h4> : null}
    </div>
  );
}

export default Coin;
