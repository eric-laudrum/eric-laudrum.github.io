import Image from "next/image";
import ProjectPage from "./projects/page";
import AboutPage from "./about/page"
import ContractorConnect from "./contractor-connect/page";
import TrellisSequencer from "./trellis-sequencer/page";


export default function Home() {
  return (
    <main className="home-page">




    
      <AboutPage />

      <div className="github-stats">

        <img 
          className="github-stat"
          src="https://github-readme-stats.vercel.app/api/top-langs/?username=eric-laudrum&layout=compact&theme=transparent" 
          alt="Top Languages" 
        />

        <img
          className="github-stat"
          src="https://github-readme-stats.vercel.app/api?username=eric-laudrum&show_icons=true&theme=transparent" 
          alt="GitHub Stats" 
         />
      </div>

    </main>
  );
}
