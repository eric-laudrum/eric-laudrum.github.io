import Image from "next/image";
import ProjectPage from "./projects/page";
import AboutPage from "./about/page"
import ContractorConnect from "./contractor-connect/page";
import TrellisSequencer from "./trellis-sequencer/page";
import GitHubStats from "../components/GitHubStats";


export default function Home() {
  return (
    <main className="home-page">

    
      <AboutPage />

      <GitHubStats />
      

    </main>
  );
}
