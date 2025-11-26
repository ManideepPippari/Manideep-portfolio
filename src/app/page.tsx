import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Achievements from "./components/Achievements";
import Contact from "./components/Contact";

// 🔥 SEO Metadata (Google uses this for ranking)
export const metadata = {
  title: "Manideep Pippari | Data Analyst & AI/ML Engineer",
  description:
    "Portfolio of Manideep Pippari — Data Analyst and AI/ML Engineer skilled in Python, SQL, AWS, Databricks, Snowflake, Power BI and ETL automation pipelines.",
  keywords: [
    "Manideep Pippari",
    "Data Analyst",
    "AI Analyst",
    "AI/ML Engineer",
    "Data Engineer",
    "Python",
    "SQL",
    "AWS",
    "Snowflake",
    "Databricks",
    "ETL Pipeline",
    "Portfolio"
  ],
};

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Achievements />
      <Contact />
    </>
  );
}