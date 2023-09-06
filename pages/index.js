import { Inter } from "next/font/google";
import Navbar from "@/pages/navbar";
import Header from "@/pages/header";
import Portfolio from "@/pages/portfolio";
import Experience from "@/pages/experience";
import Footer from "@/pages/footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <div className="container" id="home">
        <Navbar />
        <Header />
        <Portfolio />
        <Experience />
      </div>
      <Footer />
    </main>
  );
}
