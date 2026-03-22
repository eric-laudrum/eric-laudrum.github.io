import Image from "next/image";
import ProjectPage from "./projects/page";
import AboutPage from "./about/page"
import ContractorConnect from "./contractorConnect/page";
import TrellisSequencer from "./trellisSequencer/page";
import GitHubStats from "../components/GitHubStats";


export default function Home() {
  return (
    <main className="home-page">

    
      <AboutPage />

      <GitHubStats />
      

    </main>
  );
}
