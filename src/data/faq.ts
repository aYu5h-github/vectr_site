import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How is ${siteDetails.siteName} different from other study platforms?`,
        answer: `${siteDetails.siteName} has a features like focus mode and pomodoro timer that help you manage time more effectively and stay more productive during study sessions.`,
    },
    {
        question: `Can I use ${siteDetails.siteName} to boost productivity?`,
        answer: 'Absolutely! Vectr has focus mode and peer study leaderboard features that help you stay focused and motivated during study sessions.',
    },
    {
        question: `Is ${siteDetails.siteName} for creators?`,
        answer: 'Absolutely. Creators can create and share their content, while also benefiting from our platform for increased visibility and engagement.',
    },
    {
        question: 'What are \'Communities\'?',
        answer: 'Communities are groups where users can share their doubts, ask questions, and connect with like-minded individuals.',
    },
    {
        question: `How does ${siteDetails.siteName} deals with distractions?`,
        answer: 'Unlike YouTube or other platforms, we ensure ad-free content delivery and a distraction-less environment for our users.',
    }
];