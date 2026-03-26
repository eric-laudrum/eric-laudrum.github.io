const GitHubStats = () => {

    const baseUrl = "https://github-readme-stats-git-master-eric-laudrums-projects.vercel.app/api";
    const params = "&username=eric-laudrum&hide_border=true&count_private=true&cache_seconds=1800";


    return (
        <div className="github-stats">
            <img 
                className="github-stat"
                id="top-languages"
                src={`${baseUrl}/top-langs?layout=donut${params}`}
                alt="Top Languages"
            />

            <img
                className="github-stat"
                id="general-stats"
                src={`${baseUrl}?show_icons=true${params}`}
                alt="GitHub Stats" 
            />
        </div>
    );
}

export default GitHubStats;