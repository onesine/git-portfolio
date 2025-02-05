import { FolderClosed, Star } from "lucide-react";

import { getLanguageColors } from "@/helpers";
import { CardContainer, MergeIcon } from "@/hooks/utils.tsx";
import { GitHubUserType } from "@/types";

interface Props {
    data: GitHubUserType;
}

const Project = (props: Props) => {
    const { data } = props;

    return (
        <CardContainer>
            <a
                href={data?.html_url}
                target="_blank"
                rel="noreferrer"
                className="h-full flex flex-col justify-between block p-7"
            >
                <div>
                    <div className="flex items-center space-x-2">
                        <FolderClosed className="h-5 w-5" />
                        <h4 className="text-lg font-semibold">{data?.name}</h4>
                    </div>

                    <p className="text-sm mt-2">{data?.description}</p>
                </div>

                <div className="flex items-center justify-between text-sm mt-5">
                    <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-0.5">
                            <Star className="h-4 w-4" />
                            <span>{data?.stargazers_count}</span>
                        </div>

                        <div className="flex items-center space-x-O.5">
                            <MergeIcon className="h-4 w-4" />
                            <span>{data?.forks_count}</span>
                        </div>
                    </div>

                    <div className="flex items-center space-x-1">
                        <span
                            className={"h-3 w-3 rounded-full"}
                            style={{ backgroundColor: getLanguageColors(data?.language) }}
                        />
                        <span>{data?.language}</span>
                    </div>
                </div>
            </a>
        </CardContainer>
    );
};

export default Project;
