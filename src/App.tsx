import { Layout } from "./components/Layout";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";

export default function App() {
  return (
    <Layout>
      <ScrollProgress />
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
      <BackToTop />
    </Layout>
  );
}