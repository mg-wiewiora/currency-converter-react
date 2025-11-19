import "./style.css";

const Result = ({ result }) => (
  <p className="result">
    {result?.resultAmount && !isNaN(result.resultAmount) && (
      <>
        Wynik to:&nbsp;
        <strong>
          {result.resultAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </p>
);

export default Result;
