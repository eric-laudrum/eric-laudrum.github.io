import GitHubStats from "../components/GitHubStats";
import About from "@/components/AboutHome";


export default function Home() {
  return (
    <main className="home-page">

    
      <About isFullPage={false} />

      <GitHubStats />
      

    </main>
  );
}
