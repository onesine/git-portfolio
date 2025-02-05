# Git Portfolio

This project is a portfolio inspired by [GitProfile](https://github.com/arifszn/gitprofile). You can quickly create your portfolio with the template provided. To do this you just need to provide your github username and some configurations.

## Online exemple

#### Light Mode
<p align="center">
<img src="https://raw.githubusercontent.com/onesine/git-portfolio/master/assets/img/light_Screen_Shot_2022-08-04_at_17.04.09.png" alt="preview react-tailwindcss-select">
</p>

#### Dark Mode
<p align="center">
<img src="https://raw.githubusercontent.com/onesine/git-portfolio/master/assets/img/dark_Screen_Shot_2022-08-04_at_17.04.09.png" alt="preview react-tailwindcss-select">
</p>

To view a live example, [click here](https://git-profile-red.vercel.app/).

## Installation
If you want to use git portfolio you can:
- Forking this repo
- Setting up locally

### Forking this repo
You just have to get a copy of the repo from this [link](https://github.com/onesine/git-portfolio/fork) and then you can configure with your data.

### Setting up locally
To do so, you just have to execute these commands.
- Get project
```bash
git clone https://github.com/onesine/git-portfolio.git
cd git-portfolio
```
- Install dependencies.
```bash
npm install
```
- Run dev server.
```bash
npm run start
```

If everything goes well so far, you can now proceed to the configuration.

## Configuration
Everything happens in the `src/config/index.tsx` file. Modify it as you like to get the result you want.

```javascript
{
    profile: {
        username: "",
        contact: [
            {
                link: null,
                data: {
                    text: "",
                    value: ""
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: null,
                data: {
                    text: "",
                    value: ""
                },
                icon: (<BuildingOfficeIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "=",
                    value: ""
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<TwitterIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<MediumIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<DevIcon className="h-4 w-4"/>)
            },
            {
                link: null,
                data: {
                    text: "",
                    value: ""
                },
                icon: (<GlobeAltIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        techStack: [],
        experience: [
            {
                period: "",
                position: "",
                institution: ""
            },
            {
                period: "",
                position: "",
                institution: ""
            },
        ],
        eduction: [
            {
                period: "",
                position: "",
                institution: ""
            },
            {
                period: "",
                position: "",
                institution: ""
            },
        ],
        tryProjects: [
            {
                image: "",
                link: "",
                title: "",
                description: "",
                date: "",
                techStack: []
            },
            {
                image: "",
                link: "",
                title: "",
                description: "",
                date: "",
                techStack: []
            }
        ]
    }
}
```

### Avatar, Bio and My Projects
These data are automatically retrieved via GitHub

> **Warning**
>
> For your CV to be downloadable you must put it in the `public/pdf` folder. The file must have as name your github username.

### Contact
```javascript
{
    profile: {
        // ...
        contact: [
            {
                link: null,
                data: {
                    text: "",
                    value: ""
                },
                icon: (<MapPinIcon className="h-4 w-4"/>)
            },
            {
                link: null,
                data: {
                    text: "",
                    value: ""
                },
                icon: (<BuildingOfficeIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "=",
                    value: ""
                },
                icon: (<GithubIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<TwitterIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<LinkedInIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<MediumIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<DevIcon className="h-4 w-4"/>)
            },
            {
                link: null,
                data: {
                    text: "",
                    value: ""
                },
                icon: (<GlobeAltIcon className="h-4 w-4"/>)
            },
            {
                link: "",
                data: {
                    text: "",
                    value: ""
                },
                icon: (<EnvelopeIcon className="h-4 w-4"/>)
            },
        ],
        // ...
    }
}
```

### Experience
```javascript
{
    profile: {
        // ...
        experience: [
            {
                period: "",
                position: "",
                institution: ""
            },
            {
                period: "",
                position: "",
                institution: ""
            },
        ]
        // ...
    }
}
```

### Education
```javascript
{
    profile: {
        // ...
        eduction: [
            {
                period: "",
                position: "",
                institution: ""
            },
            {
                period: "",
                position: "",
                institution: ""
            },
        ],
        // ...
    }
}
```

### A recent project that can be tested
```javascript
{
    profile: {
        // ...
        tryProjects: [
            {
                image: "project_1.png",
                link: "",
                title: "",
                description: "",
                date: "",
                techStack: []
            },
            {
                image: "project_1.png",
                link: "",
                title: "",
                description: "",
                date: "",
                techStack: []
            }
        ]
        // ...
    }
}
```

> **Warning**
>
>To make your project images visible. You must put them in the `public/images` folder.

## Contributing
Got ideas on how to make this better? Open an issue!

## Thanks
Thank you, this project would never have seen the light of day without [GitProfile](https://react-select.com/).
It was a pleasure to be inspired by GitProfile's beautiful interface to realize this project.

## License
MIT Licensed. Copyright (c) Lewhe Onesine 2022.