import Head from "next/head";
import Certificados from "../src/components/Certificados";
import Contact from "../src/components/Contact";
import Footer from "../src/components/Footer";
import Header from "../src/components/HeaderComponent";
import Homepage from "../src/components/Home";
import Portfolio from "../src/components/Portfolio";
import Tecnologias from "../src/components/Tecnologias";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thomas Aleknovic</title>
        <meta name="description" content="Front-end Development Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <div className="bg-gradient-to-t from-mainPurple/10 to-mainBlack h-full">
        <Homepage />
        <Tecnologias />
        <Portfolio />
        <Certificados />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
