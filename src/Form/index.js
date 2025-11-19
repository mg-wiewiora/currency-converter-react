import "./style.css";
import currencies from "./currencies";
import { useState } from "react";

const Form = ({ calculateResult, result }) => {
  const [currency, setCurrency] = useState(currencies[0].shortName);
  const [amount, setAmount] = useState("");

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
                name="currency"
                className="form__field"
                defaultValue="EUR"
              >
                <option value="EUR">EUR - euro</option>
                <option value="GBP">GBP - funt</option>
                <option value="USD">USD - dolar</option>
              </select>
            </label>
          </p>
        </div>
      </fieldset>
      <p>
        <button className="form__button">Przelicz</button>
      </p>
      <p className="form__result"></p>
    </form>
  );
};

export default Form;
