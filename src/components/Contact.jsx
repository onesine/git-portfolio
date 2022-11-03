import {CardContainer} from "./utils";
import config from "../config";

const Contact = () => {
    const {profile} = config;

    return (
        <CardContainer className="p-7 text-gray-500 text-sm space-y-5">
            {profile.contact.map((item, index) => (
                <a key={index} href={item.link ? item.link : `#${item?.data?.text}`} target="_blank" rel="noreferrer" className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        {item.icon}
                        <span className="font-medium">{item?.data?.text}:</span>
                    </div>

                    <p className="font-light">{item?.data?.value}</p>
                </a>
            ))}
        </CardContainer>
    );
};

export default Contact;