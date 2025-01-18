import {motion} from "motion/react";
import {
    BackgroundWrapper,
    PatternStyled,
    RectBackgroundStyled, RectStyled,
    SVGStyled
} from "./InitialTransition.style.tsx";
import {useEffect} from "react";

export const InitialTransition = () => {

    const MotionBackgroundWrapper = motion(BackgroundWrapper)
    const MotionSVGStyled = motion(SVGStyled)
    const MotionRectStyled = motion(RectStyled);

    const blackBox = {
        initial: {
            height: "100vh",
            width: "100%",
            bottom: 0,
        },
        animate: {
            height: 0,
            transition: {
                when: "afterChildren",
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
                duration: 0.25,
                when: "afterChildren",
            },
        },
    };

    const text = {
        initial: {
            y: 40,
        },
        animate: {
            y: 80,
            transition: {
                duration: 1.5,
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
                    patternUnits={"userSpaceOnUse"}
                    width={750}
                    height={800}
                >
                    <RectBackgroundStyled/>
                    <MotionRectStyled variants={text}/>
                </PatternStyled>
                <text
                    textAnchor="middle"
                    x="50%"
                    y="50%"
                    style={{
                        fill: "url(#pattern)",
                        fontSize: "50px"
                }}
                >
                    LOGO DE MOI
                </text>
            </MotionSVGStyled>
        </MotionBackgroundWrapper>
    )
}