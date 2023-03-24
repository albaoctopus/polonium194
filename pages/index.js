import { ConnectWallet } from "@thirdweb-dev/react";
import styles from "../styles/Home.module.css";
import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';
import Marketnew from "../components/Marketnew";
import Exploreq from "../sections/Exploreq";

export default function Home() {
  return (
    <div className="bg-primary-black overflow-hidden">
    <Navbar />
    <Hero />
    <div className="relative">
      <About />
      <div className="gradient-03 z-0" />
      <Exploreq />
    </div>
  
    <div className="relative">
      <Insights />
      
    </div>
   
    <Footer />
  </div>
  );
}
