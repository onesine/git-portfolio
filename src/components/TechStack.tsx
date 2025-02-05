import { CardContainer, CardTitle } from "../hooks/utils.tsx";

import configs from "@/config";

const TechStack = () => {
    const { profile } = configs;
    return (
        <CardContainer className="p-7">
            <CardTitle>Tech Stack</CardTitle>
            <div className="flex gap-2 flex-wrap items-center justify-center">
                {profile.techStack.map((item, index) => (
                    <span
                        key={index}
                        className="text-center font-semibold px-3.5 py-1 text-white text-xs rounded-2xl bg-indigo-600"
                    >
                        {item}
                    </span>
                ))}
            </div>
        </CardContainer>
    );
};

export default TechStack;
