const GitHubStats = () => {

    const baseUrl = "https://github-readme-stats-git-master-eric-laudrums-projects.vercel.app/api";
    const params = "&username=eric-laudrum&hide_border=true&count_private=true&cache_seconds=1800";


    return (
        <div className="github-stats">
            <div className="github-stat">

                <img 
                    className="github-stat-image"
                    id="top-languages"
                    src={`${baseUrl}/top-langs?layout=donut${params}`}
                    alt="Top Languages"
                />

            </div>
            

            {/* Stats */}
            <div className="github-stat">

                <img
                    className="github-stat-image"
                    id="general-stats"
                    src={`${baseUrl}?show_icons=true${params}`}
                    alt="GitHub Stats" 
                />


            </div>
            
        </div>
    );
}

export default GitHubStats;