import { useState } from "react";

import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

import currencies from "./Form/currencies";

function App() {
  const [result, setResult] = useState();

  const calculateResult = (currency, amount) => {
    const rate = currencies.find(
      ({ shortName }) => shortName === currency
    ).rate;

    setResult({
      resultAmount: amount / rate,
      currency,
    });
  };

  return (
    <Container className="container">
      <Header title="Kalkulator walut" />
      <Form result={result} calculateResult={calculateResult} />
      <Footer />
    </Container>
  );
}

export default App;
