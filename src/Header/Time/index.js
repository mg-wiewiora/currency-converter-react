import { useEffect, useState } from "react";
import "./style.css";

const getFormattedTime = (date) => date.toLocaleString(undefined, {
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    day: "numeric",
    month: "long",
  });


const Time = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div className="time">
      Dzisiaj jest:&nbsp;
      {getFormattedTime(date)}
    </div>
  );
};

export default Time;
