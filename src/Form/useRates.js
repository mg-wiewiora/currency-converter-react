import { useEffect, useState } from "react";

export const useRates = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(
          "https://api.currencyapi.com/v3/latest?apikey=cur_live_80LQwMpNQwXW2ZC7J5jGvATB053UFBjRWxshNxQ4&base_currency=PLN&currencies=EUR,USD,GBP,CHF,JPY,AUD,CAD,SEK"
        );

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const data = await response.json();

        setRatesData({
          state: "success",
          rates: data.data,
          date: data.meta.last_updated_at,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 1500);
  }, []);

  return ratesData;
};
