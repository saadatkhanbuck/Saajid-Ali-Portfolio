import MouseGlow from "@/components/MouseGlow";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Timeline from "@/components/Timeline";
import Results from "@/components/Results";
import CaseStudies from "@/components/CaseStudies";
import Tools from "@/components/Tools";
import Contact from "@/components/Contact";
import IntegrationsNetwork from "@/components/IntegrationsNetwork";

export default function Home() {
  return (
    <>
      <MouseGlow />
      <Nav />
      <main>
        <Hero />
        <About />
        <IntegrationsNetwork/>
        <Timeline />
        <Results />
        <CaseStudies />
        <Tools />
      </main>
      <Contact />
    </>
  );
}
