import { IMenuItem, ISocials } from "@/types";

export const footerDetails: {
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    quickLinks: [
        {
            text: "Features",
            url: "#features"
        },
        // {
            // text: "Pricing",
            // url: "#pricing"
        // },
        {
            text: "Why Us?",
            url: "#testimonials"
        }
    ],
    email: 'vectr@gmail.com',
    telephone: '+1 (123) 456-7890',
    socials: {
        github: 'https://github.com',
        linkedin: 'https://www.linkedin.com',
        instagram: 'https://www.instagram.com',
    }
}