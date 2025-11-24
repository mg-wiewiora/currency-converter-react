import { useEffect, useState } from "react";
import { Wrapper } from "./styled";

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
    <Wrapper>
      Dzisiaj jest:&nbsp;
      {getFormattedTime(date)}
    </Wrapper>
  );
};

export default Time;
