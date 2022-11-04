import {CardContainer} from "./utils";
import {useFetchData} from "../hooks";
import config from "../config";

const Resume = () => {
    const {profile} = config;
    const [data] = useFetchData(`https://api.github.com/users/${profile.username}`);

    console.log("data");
    return (
        <CardContainer className="p-7 flex flex-col items-center justify-center">
            <div className="h-36 w-36 p-0.5 border-[3px] border-indigo-600 rounded-full">
                <img
                    className="h-full rounded-full object-center object-cover"
                    src={data?.avatar_url || "/images/644888.png"}
                    alt=""
                />
            </div>

            <div className="mt-6 text-gray-400 space-y-4 text-center">
                <h3 className="text-2xl font-bold text-gray-500">{data?.name || "-"}</h3>

                <p className=" text-lg px-5 text-gray-700 text-opacity-60">
                    {data?.bio || "-"}
                </p>

                <button className="uppercase p-2 rounded-md text-xs font-semibold border border-gray-400 hover:text-white hover:bg-gray-400 transition duration-300">
                    Download Resume
                </button>
            </div>
        </CardContainer>
    )
};

export default Resume;