import {MapPinIcon} from "@heroicons/react/24/solid";
import {BuildingOfficeIcon, EnvelopeIcon, GlobeAltIcon} from "@heroicons/react/20/solid";
import {DevIcon, GithubIcon, LinkedInIcon, MediumIcon, TwitterIcon} from "./components/utils";
import moment from "moment";

const config = {
    profile: {
        username: "onesine",
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
                    value: "Paydunya"
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
                period: "2019 - Today",
                position: "Full-stack Developer",
                institution: "DMD SARL"
            },
            {
                period: "July 2019 - September 2019",
                position: "Full-stack Developer | Internship",
                institution: "DMD SARL"
            },
        ],
        eduction: [
            {
                period: "2015 - 2019",
                position: "Licence 3",
                institution: "ESGIS"
            },
            {
                period: "2016",
                position: "12th Grade",
                institution: "CSS / CED"
            },
        ],
        tryProjects: [
            {
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
            },
        ]
    }
};

export default config