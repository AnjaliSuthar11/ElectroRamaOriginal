import { createFileRoute } from "@tanstack/react-router";
import { CurtainIntro } from "@/components/site/CurtainIntro";
import { SiteNav } from "@/components/site/SiteNav";
import { HeroTheater } from "@/components/site/HeroTheater";
import {
  AboutBand,
  BrandsMarquee,
  StatsBand,
} from "@/components/site/AboutBrandsStats";
import { Solutions, Projects } from "@/components/site/SolutionsProjects";
import { WhyChoose, Process } from "@/components/site/WhyProcess";
import { Contact,} from "@/components/site/ContactFooter";
import { useRevealOnScroll } from "@/hooks/use-reveal";
import OurSolutions from "@/components/site/OurSolutions";
import AboutElectrorama from "@/components/site/AboutElectrorama";
import FeaturedProjects from "@/components/site/FeaturedProjects";
import OurProcess from "@/components/site/OurProcess";
import ConsultationCTA from "@/components/site/ConsultationCTA";
import Footer from "@/components/site/Footer";
import { SoundVisualizer } from "@/components/site/SoundVisualizer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Electrorama — Immersive AV & Cinema Experiences" },
      {
        name: "description",
        content:
          "Electrorama engineers immersive AV & cinema experiences — audio-visual consultants, system integrators and national distributor for HARMAN (JBL). Cinemas, auditoriums, LED walls and corporate AV across India.",
      },
      { property: "og:title", content: "Electrorama — Immersive AV & Cinema Experiences" },
      {
        property: "og:description",
        content:
          "World-class cinemas, auditoriums and AV environments — engineered end-to-end across India.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  useRevealOnScroll();

  return (
    <div className="min-h-screen bg-background text-foreground">
      <CurtainIntro />
      <SiteNav />
      <main>
        <HeroTheater />
            <BrandsMarquee />
        <OurSolutions/>
        <AboutElectrorama/>
        <FeaturedProjects/>
        <OurProcess/>
        <WhyChoose />
        {/* <SoundVisualizer/> */}
        <Contact />

        {/* so first parda smooth parda then in big screen the name of the compnay or logo then the big thearte screen */}

        {/* <ConsultationCTA/> */}
        
        {/* <AboutBand /> */}
    
        {/* <StatsBand /> */}
        {/* <Solutions /> */}
        {/* <Projects /> */}
        {/* <Process /> */}
      </main>
      <Footer />
    </div>
  );
}
