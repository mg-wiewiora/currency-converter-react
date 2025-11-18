import Container from "./Container";

function App() {
  return (
    <Container className="container">
      <header className="header">
        <h1 className="header__title">Kalkulator walut</h1>
      </header>

      <main>
        <form className="form">
          <fieldset className="form__fieldset">
            <legend className="form__legend">Co chcesz przeliczyć?</legend>
            <p>
              <label>
                <span className="form__label">Kwota w PLN*:</span>
                <input
                  className="form__field"
                  type="number"
                  name="amount"
                  step="0.01"
                  min="0.01"
                  placeholder="wpisz liczbę"
                  autofocus
                  required
                />
              </label>
            </p>
            <p>
              <label>
                <span className="form__label">Waluta:</span>
                <select name="currency" className="form__field">
                  <option value="EUR" selected>
                    EUR - euro
                  </option>
                  <option value="GBP">GBP - funt</option>
                  <option value="USD">USD - dolar</option>
                </select>
              </label>
            </p>
          </fieldset>
          <p>
            <button className="form__button">Przelicz</button>
          </p>
          <p className="form__result"></p>
        </form>
      </main>

      <footer>
        <p>
          Kursy walut pochodzą ze strony <em>nbp.pl</em> z Tabeli nr
          214/A/NBP/2025 z dnia 2025-11-04.
          <br />* pole obowiązkowe
        </p>
      </footer>
    </Container>
  );
}

export default App;
