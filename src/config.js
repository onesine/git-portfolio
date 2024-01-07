import {MapPinIcon} from "@heroicons/react/24/solid";
import {BuildingOfficeIcon, EnvelopeIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {GithubIcon, LinkedInIcon} from "./components/utils";
import moment from "moment";

const config = {
    profile: {
        username: "passadis",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Athens"
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: "https://www.unisystems.gr/",
                data: {
                    text: "Company",
                    value: "Unisystems"
                },
                icon: (<BuildingOfficeIcon className="h-4 w-4"/>)
            },
            {
                link: "https://github.com/passadis",
                data: {
                    text: "GitHub",
                    value: "passadis"
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            
            {
                link: "https://www.linkedin.com/in/kpassad/",
                data: {
                    text: "LinkedIn",
                    value: "Konstantinos Passadis"
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },

            {
                link: null,
                data: {
                    text: "Website",
                    value: "https://cloudblogger.eu"
                },
                icon: (<GlobeAltIcon className="h-4 w-4"/>)
            },
            {
                link: "mailto:passadis@outlook.com",
                data: {
                    text: "Email",
                    value: "passadis@outlook.com"
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: ["Azure", "Kubernetes", "NodeJS", "React.js", "SQL", "Git", "CSS", "Python"],
        experience: [
            {
                period: "2000 - Today",
                position: "IT Professional",
                institution: ""
            },
        ],
        eduction: [
            {
                period: "1977 - Today",
                position: "Learner",
                institution: "Life"
            },

        ],
        tryProjects: [
            /*{
                image: "cryptocowrie-app.png",
                link: "https://app.cryptocowries.io/login",
                title: "CryptoCowries app",
                description: "This project is primarily an app for buying, depositing and withdrawing crypto-currencies.",
                date: "Still in development",
                techStack: ["HTML", "CSS", "Typescript", "Tailwind", "React"]
            },
            {
                image: "atompay-app.png",
                link: "https://test-paydunya-atompay.vercel.app/",
                title: "Atompay app",
                description: "It's an application for transferring money as part of a challenge. All data used in this application is false.",
                date: moment(new Date("2023-02-21"), "YYYYMMDD").fromNow(),
                techStack: ["HTML", "JavaScript", "React", "Tailwind"]
            },
            {
                image: "inventor-app.png",
                link: "http://45.134.226.100/",
                title: "Inventor app",
                description: "This project is a property management application for businesses.",
                date: moment(new Date("2022-12-13"), "YYYYMMDD").fromNow(),
                techStack: ["HTML", "JavaScript", "React", "Bootstrap 4"]
            },
            {
                image: "react-tailwindcss-datepicker.png",
                link: "https://react-tailwindcss-datepicker.vercel.app/",
                title: "React Tailwindcss Datepicker",
                description: "Modern date range picker component for React using Tailwind 3 and dayjs. Alternative to Litepie Datepicker.",
                date: moment(new Date("2022-11-18"), "YYYYMMDD").fromNow(),
                techStack: ["JavaScript", "TypeScript", "React", "Next", "Tailwindcss"]
            },
            {
                image: "git-profile.png",
                link: "https://git-profile-red.vercel.app/",
                title: "Git Profile",
                description: "This project presents some data from my GitHub and some project you can try.",
                date: moment(new Date("2022-11-03"), "YYYYMMDD").fromNow(),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "react-headless-accordion.png",
                link: "https://react-nested-accordion.vercel.app/",
                title: "Example usage react-headless-accordion",
                description: "This project presents some use cases of my react-headless-accordion package.",
                date: moment(new Date("2022-10-17"), "YYYYMMDD").fromNow(),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "react-tailwindcss-select.png",
                link: "https://demo-react-tailwindcss-select.vercel.app/",
                title: "Demo of react-tailwindcss-select",
                description: "This project allows you to test the different options available in my react-tailwindcss-select package.",
                date: moment(new Date("2022-07-13"), "YYYYMMDD").fromNow(),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "satis-backoffice.png",
                link: "https://backoffice.satis-universe.com/",
                title: "Satis backoffice",
                description: "This project is a client survey application for microfinance institutions..",
                date: moment(new Date("2022-04-13"), "YYYYMMDD").fromNow(),
                techStack: ["HTML", "JavaScript", "React", "PHP", "Laravel", "Tailwindcss"]
            },*/
        ]
    }
};

export default config