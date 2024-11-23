export interface Config {
    resumeFile: string,
    navBarConfig: {
        text: string,
        profilePic: string,
        navItems: string[]
    },
    about: {
        firstName: string,
        lastName: string,
        email: string,
        aboutMe: string;
        socialProfiles: {
            name: string,
            link: string,
            class: string
        }[]
    },
    experience: Array<{
        title: string,
        company: string,
        start: string,
        end: string,
        details: string[]
    }>,
    educationDetails: Array<{
        college: string,
        website: string,
        course: string,
        start: string,
        end: string
    }>,
    skills: {
        title: string,
        techList: string[]
    }[],
    projects: {
        title: string,
        description: string,
        techList: string[]
    }[],
    contact: {
        action: string,
        formId: string
    },
    technologyMap: Record<string, { title: string, class: string }>
}
