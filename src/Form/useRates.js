import { useEffect, useState } from "react";

export const useRates = () => {
const [ratesData, setRatesData] = useState({
    state: "loading",
});

useEffect(() => {
    const fetchRates = async () => {
        try {
            const response = await fetch("url")

            if(!response.ok) {
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
    setTimeout(fetchRates,1500);
}, []);

return ratesData;
};