import "./style.css";

const Form = () => (
  <form className="form">
    <fieldset className="form__fieldset">
      <legend className="form__legend">Co chcesz przeliczyć?</legend>

      <div className="form__container">
        <p className="form__section">
          <label>
            <span className="form__label">Kwota w PLN*:</span>
            <input
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
            <select name="currency" className="form__field" defaultValue="EUR">
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

export default Form;
