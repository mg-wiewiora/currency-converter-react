import "./style.css";
import currencies from "./currencies";
import { useState } from "react";
import Result from "./Result";

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
    <form className="form" onSubmit={onFormSubmit}>
      <fieldset className="form__fieldset">
        <legend className="form__legend">Co chcesz przeliczyć?</legend>

        <div className="form__container">
          <p className="form__section">
            <label>
              <span className="form__label">Kwota w PLN*:</span>
              <input
                value={amount}
                onChange={({ target }) => setAmount(target.value)}
                className="form__field"
                type="number"
                name="amount"
                step="0.01"
                min="0.01"
                placeholder="wpisz liczbę"
                autoFocus
                required
              />
            </label>
          </p>

          <p className="form__section">
            <label>
              <span className="form__label">Waluta:</span>
              <select
                value={currency}
                onChange={({ target }) => setCurrency(target.value)}
                name="currency"
                className="form__field"
              >
                {currencies.map((currency) => (
                  <option key={currency.shortName} value={currency.shortName}>
                    {currency.fullName}
                  </option>
                ))}
              </select>
            </label>
          </p>
        </div>
      </fieldset>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <Result result={result} />
    </form>
  );
};

export default Form;
