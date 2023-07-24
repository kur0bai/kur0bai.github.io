import Layout from "@/layouts/Layout";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/layouts/Footer";
import { useEffect, useRef } from "react";

export default function Home() {
  const handleScroll = () => {
    //console.log("SSSSS", window.scrollY);
    if (window.scrollY >= 660) {
      //console.log("Está en segunda");
    } else if (window.scrollY >= 1315) {
      //console.log("Està en projects");
    }
    //setClientWindowHeight(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });
  return (
    <Layout>
      <Profile />
      <About />
      <Projects />
      <Footer />
    </Layout>
  );
}
