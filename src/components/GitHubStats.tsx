const GitHubStats = () =>{
    return(

    <div className="github-stats">
        <img 
            className="github-stat"
            id="top-languages"
            src="https://github-readme-stats.vercel.app/api/top-langs/?username=eric-laudrum&layout=donut-vertical"
            alt="Top Languages" 
        />

        <img
            className="github-stat"
            id="general-stats"
            src="https://github-readme-stats.vercel.app/api?username=eric-laudrum&show_icons=true" 
            alt="GitHub Stats" 
            />
    </div>

    )
}


export default GitHubStats;