import { Wrapper } from "./styled";
import { useRates } from "../Form/useRates";

const Footer = () => {
  const ratesData = useRates();

  if (ratesData?.state !== "success") return null;

  return (
    <Wrapper>
      <p>
        Kursy walut pochodzą ze strony <em>currencyapi.com</em> .
        <br />
        Aktualne na dzień {new Date(ratesData.date).toLocaleString("pl-PL")}.
        <br />* pole obowiązkowe
      </p>
    </Wrapper>
  );
};

export default Footer;
