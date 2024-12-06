import Layout from "@/layouts/Layout";
import Profile from "@/components/Profile";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Footer from "@/layouts/Footer";
import { useEffect, useRef } from "react";

export default function Home() {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const isScrolling = useRef(false);

  const handleScroll = () => {
    if (isScrolling.current) return;

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    const sectionOffsets = sectionRefs.current.map(
      (section) => section?.offsetTop || 0
    );

    const nextSectionIndex = sectionOffsets.findIndex(
      (offset, index) =>
        scrollY < offset + viewportHeight / 2 &&
        (index === 0 ||
          scrollY >= sectionOffsets[index - 1] + viewportHeight / 2)
    );

    const targetSection = sectionRefs.current[nextSectionIndex];
    if (!targetSection) return;

    isScrolling.current = true;

    targetSection.scrollIntoView({
      behavior: "smooth",
    });

    setTimeout(() => {
      isScrolling.current = false;
    }, 700);
  };

  useEffect(() => {
    const onScroll = handleScroll;

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <Layout>
      <Profile ref={(el: HTMLDivElement) => (sectionRefs.current[0] = el)} />
      <About ref={(el) => (sectionRefs.current[1] = el)} />
      <Projects ref={(el) => (sectionRefs.current[2] = el)} />
      <Footer />
    </Layout>
  );
}
