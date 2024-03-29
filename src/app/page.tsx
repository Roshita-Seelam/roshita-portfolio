import ScrollElement from "@/common/Scroll/Element";
import Projects from "@/components/Projects";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import AboutMe from "@/components/AboutMe";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between relative">
      <Hero />
      <ScrollElement
        name="projects"
        className="my-[100px] flex flex-col items-center gap-6"
      >
        <p className="sm:text-5xl text-center text-3xl">
          Ideas I have worked on
        </p>
        {/* <p className="text-center">Technologies I use</p> */}
        <Projects />
      </ScrollElement>
      <AboutMe />
      <ScrollToTop />
    </main>
  );
}
