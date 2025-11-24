import { Wrapper } from "./styled";

const Result = ({ result }) => (
  <Wrapper>
    {result?.resultAmount && !isNaN(result.resultAmount) && (
      <>
        Wynik to:&nbsp;
        <strong>
          {result.resultAmount.toFixed(2)}&nbsp;{result.currency}
        </strong>
      </>
    )}
  </Wrapper>
);

export default Result;
