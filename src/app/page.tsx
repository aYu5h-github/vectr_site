import Hero from "@/components/Hero";
import Section from "@/components/Section";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import TextHoverEffectDemo from "@/components/TextHoverEffectDemo";

const HomePage: React.FC = () => {
  return (
    <>
      <TextHoverEffectDemo className="mt-[15rem] mb-0"/>

      <Hero />

      <Container>

        <Section
          id="testimonials"
          title="Why Vectr?"
          description=""
        >
          <Testimonials />
        </Section>


        <Benefits />

        <FAQ />

        <Stats />

        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
