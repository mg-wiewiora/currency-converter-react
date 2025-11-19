import "./style.css";

const Result = ({ result }) => (
  <p className="result">
    {result !== undefined && (
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
