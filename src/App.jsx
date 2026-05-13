import "../../noahtech/src/styles/global.css";

import Navbar    from "./components/Navbar";
import Hero      from "./components/Hero";
import Services  from "./components/Services";
import Projects  from "./components/Projects";
import Standards from "./components/Standards";
import TechStack from "./components/TechStack";
import Contact   from "./components/Contact";
import Footer    from "./components/Footer";

import { colors } from "./styles/theme";

const Divider = () => (
  <div style={{ width: "100%", height: "1px", background: colors.borderFaint }} />
);

export default function App() {
  return (
    <div style={{ background: colors.bg, color: colors.text, minHeight: "100vh", overflowX: "hidden" }}>
      <Navbar />
      <Hero />
      <Divider />
      <Services />
      <Divider />
      <Projects />
      <Divider />
      <Standards />
      <Divider />
      <TechStack />
      <Divider />
      <Contact />
      <Footer />
    </div>
  );
}
