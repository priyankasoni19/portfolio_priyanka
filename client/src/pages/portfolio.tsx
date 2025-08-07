import { Hero } from "../components/sections/hero";
import { About } from "../components/sections/about";
import { Skills } from "../components/sections/skills";
import { Projects } from "../components/sections/projects";
import { Resume } from "../components/sections/resume";
import { Contact } from "../components/sections/contact";
import { Header } from "../components/layout/header";
import { Footer } from "../components/layout/footer";
import { Particles } from "../components/ui/particles";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-bg-primary text-text-primary">
      <Particles />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
