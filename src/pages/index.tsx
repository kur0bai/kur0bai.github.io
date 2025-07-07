import Layout from "@/layouts/Layout";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/layouts/Footer";
import { useRef } from "react";
import { Contact } from "@/components/Contact";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);

  return (
    <Layout>
      <Profile ref={(el: HTMLDivElement) => (sectionRefs.current[0] = el)} />
      <About ref={(el) => (sectionRefs.current[1] = el)} />
      <Projects ref={(el) => (sectionRefs.current[2] = el)} />
      <Contact />
      <Footer />
    </Layout>
  );
}
