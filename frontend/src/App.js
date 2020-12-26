import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
// import {Container } from ' '
function App() {
  return (
    <>
      <Header/>
      <main className="py-3">
        <Container>
          <h1>Welcome to AK Shop</h1>
        </Container>
      </main>
     
      <Footer/>
    </>
  );
}

export default App;
