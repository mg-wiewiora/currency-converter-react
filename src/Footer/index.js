import { Wrapper } from "./styled";

const Footer = ({ ratesData }) => {
  if (ratesData?.state !== "success") return null;

  return (
    <Wrapper>
      <p>
        Kursy walut pochodzą ze strony <em>currencyapi.com</em>
        <br />
        Aktualne na dzień {new Date(ratesData.date).toLocaleString("pl-PL")}.
        <br />* pole obowiązkowe
      </p>
    </Wrapper>
  );
};

export default Footer;
