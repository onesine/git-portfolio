import {useEffect, useState} from "react";
import axios from "axios";
import config from "./config";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import TechStack from "./components/TechStack";
import ChangeTheme from "./components/ChangeTheme";
import Experience from "./components/Experience";
import {CardContainer, CardTitle} from "./components/utils";
import Project from "./components/Project";

const App = () => {
    const {profile} = config;
    const [repositories, setRepositories] = useState(null);

    useEffect(() => {
        if (profile?.username) {
            if (!repositories) {
                axios.get(`https://api.github.com/search/repositories?q=user:${profile.username}+fork:true&sort=stars&per_page=10&type=Repositories`)
                    .then(({data}) => {
                        setRepositories(data);
                    })
                    .catch(({response}) => console.error("Something is wrong"))
                ;
            }
        }
    }, []);

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

                            <a href={profile.repositories || "#repositories"} target="_blank" rel="noreferrer" className="text-sm text-gray-400">
                                See all
                            </a>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {repositories?.items.map((item, index) => (
                                <Project key={index} data={item}/>
                            ))}
                        </div>
                    </div>

                    <div className="shadow-sm border bg-zinc-100 rounded-md p-4">
                        <CardTitle>Recent Posts</CardTitle>

                        <div className="space-y-6">
                            {profile.testProject.map((item, index) => (
                                <CardContainer className="p-7 flex items-center space-x-4 text-sm text-gray-500">
                                    <div className="w-24 h-24">
                                        <svg className="absolute w-0 h-0"><defs><clipPath id="squircle" clipPathUnits="objectBoundingBox"><path d="M .5 0 C .1 0 0 .1 0 .5 0 .9 .1 1 .5 1 .9 1 1 .9 1 .5 1 .1 .9 0 .5 0 Z"/></clipPath></defs></svg>

                                        <img
                                            className="h-full object-center object-cover"
                                            style={{clipPath: "url(#squircle)"}}
                                            src="/images/644888.png"
                                            alt=""
                                        />
                                    </div>

                                    <div>
                                        <h6 className="font-medium truncate">Awesome Shortcuts: navigate to your favorite actions on the websites you love with just one click</h6>
                                        <p className="text-xs text-gray-400">3 months ago</p>
                                        <p className="mt-3 mb-7 truncate">Let's introduce a simple productivity extension that has been recently featured on Chrome Web...</p>

                                        <div className="text-xs space-x-3">
                                            {["#javascript", "#webdev", "#programming", "#react"].map((item, index) => (
                                                <span key={index} className="px-3.5 py-1.5 text-gray-400 bg-gray-100 rounded-full">
                                            {item}
                                        </span>
                                            ))}
                                        </div>
                                    </div>
                                </CardContainer>
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