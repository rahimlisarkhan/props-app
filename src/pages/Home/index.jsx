import { Container } from "react-bootstrap";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { MovieSection } from "../../components/MovieSection";




export default function Home() {
  return (
    <>
    <Header/>
    <Container>
        <MovieSection/>
    </Container>
    <Footer/>
    </>
  );
}