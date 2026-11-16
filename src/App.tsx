import { Layout } from "./components/Layout";
import { ScrollProgress } from "./components/ScrollProgress";
import { TechStack } from "./components/TechStack";
import { Projects } from "./components/Projects";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Achievements } from "./components/Achievements";
import { Contact } from "./components/Contact";
import { ProfileDashboard } from "./components/ProfileDashboard";

export default function App() {
  return (
    <Layout>
      <ScrollProgress />
      <ProfileDashboard />
      <TechStack />
      <Projects />
      <Experience />
      <Education />
      <Achievements />
      <Contact />
    </Layout>
  );
}