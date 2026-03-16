import Image from "next/image";
import ProjectPage from "./projects/page";
import AboutPage from "./about/page"
import ContractorConnect from "./contractor-connect/page";
import TrellisSequencer from "./trellis-sequencer/page";


export default function Home() {
  return (
    <main>


      <AboutPage />
      <TrellisSequencer />
      <ContractorConnect/>
      <ProjectPage />
      


    </main>
  );
}
