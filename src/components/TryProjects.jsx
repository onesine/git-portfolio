import {CardContainer} from "./utils";

const TryProjects = ({data}) => {
    return (
        <CardContainer className="p-7 text-sm text-gray-500">
            <a href={data.link || "#link"} target="_blank" rel="noreferrer" className="flex items-center space-x-4 h-full block">
                <div className="w-24 h-24">
                    <svg className="absolute w-0 h-0"><defs><clipPath id="squircle" clipPathUnits="objectBoundingBox"><path d="M .5 0 C .1 0 0 .1 0 .5 0 .9 .1 1 .5 1 .9 1 1 .9 1 .5 1 .1 .9 0 .5 0 Z"/></clipPath></defs></svg>

                    {data?.image ? (
                        <img
                            className="h-full object-center object-cover"
                            style={{clipPath: "url(#squircle)"}}
                            src={`/images/${data.image}`}
                            alt=""
                        />
                    ) : (
                        <div className="h-full bg-gray-100" style={{clipPath: "url(#squircle)"}}/>
                    )}
                </div>

                <div>
                    <h6 className="font-medium truncate">{data.title}</h6>
                    <p className="text-xs text-gray-400">{data.date}</p>
                    <p className="mt-3 mb-7 truncate">{data.description}</p>

                    <div className="text-xs space-x-3">
                        {(data.techStack || []).map((item, index) => (
                            <span key={index} className="px-3.5 py-1.5 text-gray-400 bg-gray-100 rounded-full">
                            {item}
                        </span>
                        ))}
                    </div>
                </div>
            </a>
        </CardContainer>
    );
};

export default TryProjects;