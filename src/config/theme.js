const themeConfig = {
    Dark: {
        primaryColor: "bg-indigo-600",
        body: "transition-all duration-300 antialiased bg-[#1F242D] text-[#747B88]",
        changeThemeButton: {
            hover: "hover:bg-[#343A46]",
            dropDown: "bg-[#242933] border-[#242933]",
            button: "text-white",
            buttonHover: "hover:bg-[#2A303C]",
        },
        cardContainer: "bg-[#2A303C]",
        cardTitle: "text-[#7E8591]",
        projectsContainer: "bg-[#232833] border border-[#232833]",
        resume: {
            avatarBorder: "border-indigo-600"
        },
        tryProjects: {
            tag: "bg-[#252A35]"
        },
        experience: {
            timeLine: "border-[#272D37]",
            dot: "bg-[#1F242D]"
        },
        footer: {
            link: "bg-[#2A303C] border-[#2A303C]"
        }
    },
    Light: {
        primaryColor: "bg-indigo-600",
        body: "transition-all duration-300 antialiased bg-zinc-200 text-[#797E87]",
        changeThemeButton: {
            hover: "hover:bg-gray-200",
            dropDown: "bg-white border-gray-200/60",
            button: "text-white",
            buttonHover: "hover:bg-gray-100",
        },
        cardContainer: "bg-white",
        cardTitle: "text-gray-500",
        projectsContainer: "bg-zinc-100 border border-gray-100",
        resume: {
            avatarBorder: "border-indigo-600"
        },
        tryProjects: {
            tag: "bg-gray-100"
        },
        experience: {
            timeLine: "border-gray-100",
            dot: "bg-gray-200"
        },
        footer: {
            link: "bg-white border-gray-300"
        }
    }
};

export default themeConfig;