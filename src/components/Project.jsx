import {FolderIcon, StarIcon} from "@heroicons/react/24/outline";
import {CardContainer, MergeIcon} from "./utils";
import {getLanguageColors} from "../helpers";

const Project = ({data}) => {
    console.log("data:", data)
    return (
        <CardContainer>
            <a href={data?.url} target="_blank" rel="noreferrer" className="block p-7 text-gray-500">
                <div className="flex items-center space-x-2">
                    <FolderIcon className="h-5 w-5"/>
                    <h4 className="text-lg font-semibold">{data?.name}</h4>
                </div>

                <p className="text-sm mt-2 mb-5">{data?.description}</p>

                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-0.5">
                            <StarIcon className="h-4 w-4"/>
                            <span>{data?.stargazers_count}</span>
                        </div>

                        <div className="flex items-center space-x-O.5">
                            <MergeIcon className="h-4 w-4"/>
                            <span>{data?.forks_count}</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-1">
                    <span
                        className={`h-3 w-3 rounded-full`}
                        style={{backgroundColor: getLanguageColors(data?.language)}}
                    />
                        <span>{data?.language}</span>
                    </div>
                </div>
            </a>
        </CardContainer>
    );
};

export default Project;