import {MapPinIcon} from "@heroicons/react/24/solid";
import {BuildingOfficeIcon, EnvelopeIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {DevIcon, GithubIcon, LinkedInIcon, MediumIcon, TwitterIcon} from "./components/utils";

const config = {
    profile: {
        author: "",
        username: "onesine",
        repositories: "https://github.com/onesine?tab=repositories",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Bénin"
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.dmdsatis.com/",
                data: {
                    text: "Company",
                    value: "DMD"
                },
                icon: (<BuildingOfficeIcon className="h-4 w-4"/>)
            },
            {
                link: "https://github.com/onesine",
                data: {
                    text: "GitHub",
                    value: "onesine"
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            {
                link: "https://twitter.com/LewheO",
                data: {
                    text: "Twitter",
                    value: "g2ek"
                },
                icon: (<TwitterIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.linkedin.com/in/onesine-lewhe-63109a171/",
                data: {
                    text: "LinkedIn",
                    value: "Onesine Lewhe"
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },
            {
                link: "https://medium.com/@philemonlewhe",
                data: {
                    text: "Medium",
                    value: "onesine"
                },
                icon: (<MediumIcon className="h-4 w-4"/>)
            },
            {
                link: "https://dev.to/onesine",
                data: {
                    text: "Dev",
                    value: "onesine"
                },
                icon: (<DevIcon className="h-4 w-4"/>)
            },
            {
                link: null,
                data: {
                    text: "Website",
                    value: "https://onesine.github.io"
                },
                icon: (<GlobeAltIcon className="h-4 w-4"/>)
            },
            {
                link: "mailto:lewheonesine@gmail.com",
                data: {
                    text: "Email",
                    value: "lewheonesine@gmail.com"
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: ["PHP", "Laravel", "JavaScript", "TypeScript", "React.js", "MySQL", "Git", "CSS", "Tailwindcss"],
        experience: [
            {
                period: "September 2021 - Present",
                position: "Position",
                institution: "Company Name"
            },
            {
                period: "July 2019 - August 2021",
                position: "Position",
                institution: "Company Name"
            },
        ],
        eduction: [
            {
                period: "2015 - 2019",
                position: "-",
                institution: "Institution Name"
            },
            {
                period: "2015 - 2019",
                position: "-",
                institution: "Institution Name"
            },
        ],
        testProject: [1, 2, 3, 4]
    }
};

export default config