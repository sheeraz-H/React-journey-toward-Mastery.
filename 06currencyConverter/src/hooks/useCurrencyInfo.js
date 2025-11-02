import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        if (res && res[currency]) {
          setData(res[currency]);
        } else {
          setData({});
        }
      })
      .catch((err) => {
        console.error("Currency API Error:", err);
        setData({});
      });
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
