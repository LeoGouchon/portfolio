import {motion} from "motion/react";
import {
    BackgroundWrapper, LogoImg,
    PatternStyled,
    SVGStyled
} from "./InitialTransition.style.tsx";
import {useEffect} from "react";

export const InitialTransition = () => {

    const MotionBackgroundWrapper = motion.create(BackgroundWrapper)
    const MotionSVGStyled = motion.create(SVGStyled)

    const blackBox = {
        initial: {
            height: "100vh",
            width: "100%",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                delay: 1,
                duration: 1.5,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    const textContainer = {
        initial: {
            opacity: 1,
        },
        animate: {
            opacity: 0,
            transition: {
                delay: 1,
                duration: 1,
                ease: [0.87, 0, 0.13, 1],
            },
        },
    };

    useEffect(() => {
        typeof window !== "undefined" && window.scrollTo(0, 0);
    }, []);

    return (
        <MotionBackgroundWrapper
            initial={"initial"}
            animate={"animate"}
            variants={blackBox}
            onAnimationStart={() => document.body.style.overflow = "hidden"}
            onAnimationComplete={() => document.body.style.overflow = "auto"}
        >
            <MotionSVGStyled variants={textContainer}>
                <PatternStyled
                    id="pattern"
                >
                </PatternStyled>
                <LogoImg
                    src={"/logotypo.svg"}
                />
            </MotionSVGStyled>
        </MotionBackgroundWrapper>
    )
}