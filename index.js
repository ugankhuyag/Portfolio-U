import { Card } from "@/components/Card";
import { Header } from "@/components/Header";
import { AboutMe } from "@/components/AboutMe";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Project } from "@/components/Project";

export default function Home () {
  return (
    <main className="">
      <Header />
      <AboutMe />
      <Skills />
      <Experience />
      <Project />
    </main>
  );
}