import { BsBarChartFill, BsFillStarFill } from "react-icons/bs";
import { PiGlobeFill } from "react-icons/pi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "2M+",
        icon: <BsBarChartFill size={34} className="text-blue-500" />,
        description: "Students and professionals, using Vectr to enhance productivity."
    },
    {
        title: "5.0",
        icon: <BsFillStarFill size={34} className="text-yellow-500" />,
        description: "Star rating, consistently maintained across app stores."
    },
    {
        title: "200+ ",
        icon: <PiGlobeFill size={34} className="text-green-600" />,
        description: "Creators and educators, contributing to the Vectr community."
    }
];