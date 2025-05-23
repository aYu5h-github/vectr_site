"use client"
import Image from "next/image";
import clsx from "clsx";
import { motion, Variants } from "framer-motion"
import SectionTitle from "../SectionTitle";
import { IBenefit } from "@/types";

interface Props {
    benefit: IBenefit;
    imageAtRight?: boolean;
}

const containerVariants: Variants = {
    offscreen: {
        opacity: 0,
        y: 100
    },
    onscreen: {
        opacity: 1,
        y: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 0.9,
            delayChildren: 0.2,
            staggerChildren: 0.1,
        }
    }
};

export const childVariants = {
    offscreen: {
        opacity: 0,
        x: -50,
    },
    onscreen: {
        opacity: 1,
        x: 0,
        transition: {
            type: "spring",
            bounce: 0.2,
            duration: 1,
        }
    },
};

const BenefitSection: React.FC<Props> = ({ benefit, imageAtRight }: Props) => {
    const { title, subtitle, description, footer, imageSrc } = benefit;

    return (
        <section className="benefit-section">
            <motion.div
                className="flex flex-wrap flex-col items-center justify-center gap-2 lg:flex-row lg:gap-20 lg:flex-nowrap mb-24"
                variants={containerVariants}
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
            >
                <div
                    className={clsx("flex flex-wrap items-center w-full max-w-lg", { "justify-start": imageAtRight, "lg:order-1 justify-end": !imageAtRight })}

                >
                    <div className="w-full  text-center lg:text-left ">
                        <motion.div
                            className="flex flex-col w-full"
                            variants={childVariants}
                        >
                            <SectionTitle>
                                <h3 className="lg:max-w-2xl text-xl">
                                    {title}
                                </h3>
                            </SectionTitle>

                            <h2 className="text-3xl font-bold">
                                {subtitle}
                            </h2>

                            <p className="lg:max-w-2xl mt-16 mx-auto lg:ml-0 leading-normal text-foreground-accent">
                                {description}
                            </p>

                            <p className="mt-3.5 mx-auto lg:ml-0 leading-normal font-bold text-pink-500">
                                {footer}
                            </p>

                        </motion.div>
                    </div>
                </div>

                <div className={clsx("mt-5 lg:mt-0", { "lg:order-2": imageAtRight })}>
                    <div className={clsx("w-fit flex", { "justify-start": imageAtRight, "justify-end": !imageAtRight })}>
                        <Image src={imageSrc} alt="title" width="384" height="762" quality={100} className="lg:ml-0" />
                    </div>
                </div>
            </motion.div>
        </section>
    );
}

export default BenefitSection
