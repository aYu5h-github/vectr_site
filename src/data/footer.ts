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
        {
            text: "Why Us?",
            url: "#whyus"
        },
        {
            text: "Join The Waitlist!!",
            url: "https://d0odd8306ly.typeform.com/to/y4iH2brK"
        },
    ],
    email: 'Abhinav.vectr@gmail.com',
    telephone: '+91 78988 59164',
    socials: {
        // github: 'https://github.com',
        linkedin: 'https://www.linkedin.com/company/vectrs/posts/?feedView=all',
        // instagram: 'https://www.instagram.com',
    }
}
