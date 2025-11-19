import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";
import { useState } from "react";

function App() {

const [result, setResult] = useState();

const calculateResult = (currency, amount) => {
  
}

  return (
    <Container className="container">
      <Header title="Kalkulator walut" />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
