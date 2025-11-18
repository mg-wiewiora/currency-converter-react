import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <Container className="container">
      <Header title="Kalkulator walut" />

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

      <Footer />
    </Container>
  );
}

export default App;
