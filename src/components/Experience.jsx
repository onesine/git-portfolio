import {CardContainer, CardTitle} from "./utils";

const Experience = ({title, data}) => {
    return (
        <CardContainer className="p-7">
            <CardTitle>{title}</CardTitle>

            <div className="space-y-4 border-l border-gray-100 pl-4">
                {data.map((item, index) => (
                    <div key={index} className="flex space-x-3">
                        <span className="inline-block rounded-full h-2 w-2 bg-gray-200 mt-1 ml-[-1.28rem]"/>
                        <div>
                            <p className="text-gray-800/60 text-xs">{item.period}</p>
                            <h5 className="text-sm font-semibold text-gray-500">{item.position}</h5>
                            <p className="text-sm text-gray-500">{item.institution}</p>
                        </div>
                    </div>
                ))}
            </div>
        </CardContainer>
    );
};

export default Experience;