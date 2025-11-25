import { useState } from "react";
import Result from "./Result";
import {
  Fieldset,
  Legend,
  Container,
  Section,
  Label,
  Input,
  Button,
  Loading,
  ErrorMessage,
} from "./styled";

import { useRates } from "./useRates";

const Form = () => {
  const [amount, setAmount] = useState("");
  const [currency, setCurrency] = useState("EUR");
  const [result, setResult] = useState();
  const ratesData = useRates();

  const calculateResult = (currency, amount) => {
    const rate = ratesData.rates[currency].value;
    setResult({
      resultAmount: amount * rate,
      currency,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onFormSubmit}>
      {ratesData.state === "loading" ? (
        <Loading>
          Momencik... 🛠️<br />
          Ładuję kursy walut z currencyapi.com
        </Loading>
      ) : ratesData.state === "error" ? (
        <ErrorMessage>
          Och nie! 🙈<br />
          Coś się nie udało. Czy masz dobre połączenie z Internetem? Jeśli tak i nadal widzisz tę wiadomość, spróbuj proszę później.
        </ErrorMessage>
      ) : (
        <>
          <Fieldset>
            <Legend>Co chcesz przeliczyć?</Legend>
            <Container>
              <Section>
                <Label>
                  Kwota w PLN*:
                  <Input
                    value={amount}
                    onChange={({ target }) => setAmount(target.value)}
                    type="number"
                    name="amount"
                    step="0.01"
                    min="0.01"
                    placeholder="wpisz liczbę"
                    autoFocus
                    required
                  />
                </Label>
              </Section>
              <Section>
                <Label>
                  Waluta:
                  <Input
                    as="select"
                    value={currency}
                    onChange={({ target }) => setCurrency(target.value)}
                    name="currency"
                  >
                    {Object.keys(ratesData.rates).map((currency) => (
                        <option key={currency} value={currency}>
                          {currency}
                        </option>
                      ))}
                  </Input>
                </Label>
              </Section>
            </Container>
          </Fieldset>
          <p>
            <Button type="submit">Przelicz</Button>
          </p>
          <Result result={result} />
        </>
      )}
    </form>
  );
};

export default Form;
