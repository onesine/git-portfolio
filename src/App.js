import config from "./config";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import ChangeTheme from "./components/ChangeTheme";
import Experience from "./components/Experience";
import {CardTitle} from "./components/utils";
import Project from "./components/Project";
import TryProjects from "./components/TryProjects";
import {useFetchData} from "./hooks";
import {SkeletonProject} from "./components/SkeletonProject";

const App = () => {
    const {profile} = config;
    const [data, loading] = useFetchData(`https://api.github.com/search/repositories?q=user:${profile.username}+fork:true&sort=stars&per_page=10&type=Repositories`);

    return (
        <div className="min-h-screen">
            <div className="p-4 md:p-10 flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-2/6 space-y-6">
                    <ChangeTheme/>

                    <Resume/>

                    <Contact/>

                    <TechStack/>

                    <Experience
                        title={"Experience"}
                        data={profile.experience}
                    />

                    <Experience
                        title={"Education"}
                        data={profile.eduction}
                    />
                </div>

                <div className="w-full lg:w-4/6 space-y-6">
                    <div className="shadow-sm border bg-zinc-100 rounded-md p-4">
                        <div className="flex items-center justify-between">
                            <CardTitle>My Projects</CardTitle>
                            <a href={ profile?.username ? `https://github.com/${profile?.username}?tab=repositories` : "#repositories" } target="_blank" rel="noreferrer" className="text-sm text-gray-400">
                                See all
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {loading ? (
                                <>
                                    {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
                                        <SkeletonProject key={index}/>
                                    ))}
                                </>
                            ) : (
                                <>
                                    {data?.items.map((item, index) => (
                                        <Project key={index} data={item}/>
                                    ))}
                                </>
                            )}
                        </div>
                    </div>

                    <div className="shadow-sm border bg-zinc-100 rounded-md p-4">
                        <CardTitle>Recent Posts</CardTitle>

                        <div className="space-y-6">
                            {profile.tryProjects.map((item, index) => (
                                <TryProjects key={index} data={item}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex items-center justify-center pb-7">
                <div className="border bg-white px-4 py-3 text-sm border border-gray-300 rounded-md shadow-lg">
                    Made with <span className="text-indigo-600">GitProfile</span> and <span>❤️</span>
                </div>
            </div>
        </div>
    );
};

export default App;