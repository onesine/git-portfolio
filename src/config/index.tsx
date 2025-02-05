import { MapPin, Building, Mail, Globe } from "lucide-react";

import { DevIcon, GithubIcon, LinkedInIcon, MediumIcon, TwitterIcon } from "@/hooks/utils.tsx";
import { dateTimeFormNow } from "@/libs/date.ts";

const configs = {
    profile: {
        username: "onesine",
        contact: [
            {
                link: null,
                data: {
                    text: "Based in",
                    value: "Bénin"
                },
                icon: <MapPin className="h-4 w-4" />
            },
            {
                link: "https://paydunya.com/",
                data: {
                    text: "Company",
                    value: "Paydunya"
                },
                icon: <Building className="h-4 w-4" />
            },
            {
                link: "https://github.com/onesine",
                data: {
                    text: "GitHub",
                    value: "onesine"
                },
                icon: <GithubIcon className="h-4 w-4" />
            },
            {
                link: "https://twitter.com/LewheO",
                data: {
                    text: "Twitter",
                    value: "g2ek"
                },
                icon: <TwitterIcon className="h-4 w-4" />
            },
            {
                link: "https://www.linkedin.com/in/onesine-lewhe-63109a171/",
                data: {
                    text: "LinkedIn",
                    value: "Onesine Lewhe"
                },
                icon: <LinkedInIcon className="h-4 w-4" />
            },
            {
                link: "https://medium.com/@philemonlewhe",
                data: {
                    text: "Medium",
                    value: "onesine"
                },
                icon: <MediumIcon className="h-4 w-4" />
            },
            {
                link: "https://dev.to/onesine",
                data: {
                    text: "Dev",
                    value: "onesine"
                },
                icon: <DevIcon className="h-4 w-4" />
            },
            {
                link: null,
                data: {
                    text: "Website",
                    value: "https://onesine.github.io"
                },
                icon: <Globe className="h-4 w-4" />
            },
            {
                link: "mailto:lewheonesine@gmail.com",
                data: {
                    text: "Email",
                    value: "lewheonesine@gmail.com"
                },
                icon: <Mail className="h-4 w-4" />
            }
        ],
        techStack: [
            "PHP",
            "Laravel",
            "JavaScript",
            "TypeScript",
            "React.js",
            "Next.js",
            "Node.js",
            "Adonis.js",
            "MySQL",
            "Git",
            "CSS",
            "Tailwindcss"
        ],
        experience: [
            {
                period: "April 2023 - Present",
                position: "Front-end & Mobile Developer",
                institution: "Paydunya | MyDunya"
            },
            {
                period: "September 2023 - April 2024",
                position: "Front-end Developer",
                institution: "Freelance"
            },
            {
                period: "January 2023 - March 2023",
                position: "Front-end developer services",
                institution: "FASFOX"
            },
            {
                period: "February 2019 - December 2022",
                position: "Full-stack Developer",
                institution: "DMD SARL"
            }
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
            }
        ],
        tryProjects: [
            {
                image: "MyDunya.png",
                link: "https://mydunya.com/",
                links: [
                    {
                        title: "MyDunya on Play Store",
                        link: "https://play.google.com/store/apps/details?id=com.paydunya.mydunya_live_2&hl=fr"
                    },
                    {
                        title: "MyDunya on Apple Store",
                        link: "https://apps.apple.com/fr/app/mydunya/id6475684818"
                    },
                    {
                        title: "MyDunya on Web",
                        link: "https://mydunya.com/"
                    }
                ],
                title: "MyDunya",
                description:
                    "Development of the MyDunya platform, a wallet-to-wallet and card-to-wallet money transfer application. I worked as a front-end developer on the web application (PWA), mobile application and administration dashboard.",
                date: "Still in development",
                techStack: [
                    "HTML",
                    "CSS",
                    "Typescript",
                    "Tailwind",
                    "React",
                    "Redux",
                    "React Native",
                    "PWA"
                ]
            },
            {
                image: "cryptocowrie-app.png",
                link: "https://app.cryptocowries.io/login",
                title: "CryptoCowries app",
                description:
                    "This project is primarily an app for buying, depositing and withdrawing crypto-currencies.",
                date: dateTimeFormNow(new Date("2024-04-16")),
                techStack: ["HTML", "CSS", "Typescript", "Tailwind", "React", "Redux"]
            },
            {
                image: "react-tailwindcss-datepicker.png",
                link: "https://react-tailwindcss-datepicker.vercel.app/",
                title: "React Tailwindcss Datepicker",
                description:
                    "Modern date range picker component for React using Tailwind 3 and dayjs. Alternative to Litepie Datepicker.",
                date: dateTimeFormNow(new Date("2022-11-18")),
                techStack: ["JavaScript", "TypeScript", "React", "Next", "Tailwindcss"]
            },
            {
                image: "atompay-app.png",
                link: "https://test-paydunya-atompay.vercel.app/",
                title: "Atompay app",
                description:
                    "It's an application for transferring money as part of a challenge. All data used in this application is false.",
                date: dateTimeFormNow(new Date("2023-02-21")),
                techStack: ["HTML", "JavaScript", "React", "Tailwind"]
            },
            {
                image: "inventor-app.png",
                link: "#",
                title: "Inventor app",
                description: "This project is a property management application for businesses.",
                date: dateTimeFormNow(new Date("2022-12-13")),
                techStack: ["HTML", "JavaScript", "React", "Bootstrap 4"]
            },
            {
                image: "git-profile.png",
                link: "https://git-profile-red.vercel.app/",
                title: "Git Profile",
                description:
                    "This project presents some data from my GitHub and some project you can try.",
                date: dateTimeFormNow(new Date("2022-11-03")),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "react-headless-accordion.png",
                link: "https://react-nested-accordion.vercel.app/",
                title: "Example usage react-headless-accordion",
                description:
                    "This project presents some use cases of my react-headless-accordion package.",
                date: dateTimeFormNow(new Date("2022-10-17")),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "react-tailwindcss-select.png",
                link: "https://demo-react-tailwindcss-select.vercel.app/",
                title: "Demo of react-tailwindcss-select",
                description:
                    "This project allows you to test the different options available in my react-tailwindcss-select package.",
                date: dateTimeFormNow(new Date("2022-07-13")),
                techStack: ["JavaScript", "React", "HTML", "Tailwindcss"]
            },
            {
                image: "satis-backoffice.png",
                link: "#",
                title: "Satis backoffice",
                description:
                    "This project is a client survey application for microfinance institutions..",
                date: dateTimeFormNow(new Date("2022-04-13")),
                techStack: ["HTML", "JavaScript", "React", "PHP", "Laravel", "Tailwindcss"]
            }
        ]
    }
};

export default configs;
