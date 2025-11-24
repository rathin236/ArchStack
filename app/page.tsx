import { Hero } from "@/components/sections/Hero";
import { Clients } from "@/components/sections/Clients";
import { Services } from "@/components/sections/Services";
import { Process } from "@/components/sections/Process";
import { TechStack } from "@/components/sections/TechStack";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { ChatWidget } from "@/components/ui/ChatWidget";

export default function Home() {
  return (
    <>
      <Hero />
      <Clients />
      <Services />
      <Process />
      <TechStack />
      <About />
      <Contact />
      <ChatWidget />
    </>
  );
}
