import Container from "./Container";
import Header from "./Header";
import Footer from "./Footer";
import Form from "./Form";

function App() {
  return (
    <Container className="container">
      <Header title="Kalkulator walut" />
      <Form />
      <Footer />
    </Container>
  );
}

export default App;
