import "../styles/App.css";
import Hero from "./Hero";
import Navbar from "./Navbar";
import ArticleSection from "./ArticleSection";
import Footer from "./Footer";
import CtaSection from "./CtaSection";

export default function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <Hero />
      <ArticleSection />
      <CtaSection/>
      <Footer />
    </div>
  );
}
