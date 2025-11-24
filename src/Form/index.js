import { useState } from "react";
import currencies from "./currencies";
import Result from "./Result";
import {
  Fieldset,
  Legend,
  Container,
  Section,
  Label,
  Input,
  Button,
} from "./styled";

const Form = () => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");
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

  const onFormSubmit = (event) => {
    event.preventDefault();
    calculateResult(currency, amount);
  };

  return (
    <form onSubmit={onFormSubmit}>
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
                {currencies.map((currency) => (
                  <option key={currency.shortName} value={currency.shortName}>
                    {currency.fullName}
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
    </form>
  );
};

export default Form;
