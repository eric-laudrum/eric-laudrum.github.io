import Image from "next/image";
import ProjectPage from "./projects/page";
import AboutPage from "./about/page"
import ContractorConnect from "./contractor-connect/page";


export default function Home() {
  return (
    <main>


      <AboutPage />
      <hr/>
      <ContractorConnect/>
      <hr/>
      <ProjectPage />
      


    </main>
  );
}
