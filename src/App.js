import { Container } from "./Container/styled";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <Container>
      <Header title="Kalkulator walut" />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;