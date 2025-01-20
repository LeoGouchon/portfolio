import {Typography, TypographyProps} from "@mui/material";
import {motion, useMotionValue, useTransform, animate} from "motion/react";
import {useEffect} from "react";

interface MotionTextProps extends TypographyProps {
    children: string;
}

export const MotionTypography = ({children, variant}:MotionTextProps) => {
    const getRandomCharacter = () => {
        return String.fromCharCode(33 + Math.floor(Math.random() * 94))
    }

    const getRandomString = (length: number) =>
        Array.from(
            {length: length},
            getRandomCharacter
        ).join("");

    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest: number): number => Math.round(latest)); // Counter from 0 to 100 (0% to 100% of the animation)

    const displayText = useTransform(rounded, (numberCharacter: number): string => {
        if (numberCharacter >= children.length) {
            const randomCharacterNumber: number = 5 - (numberCharacter - children.length)
            return children.slice(0, children.length - randomCharacterNumber) + getRandomString(randomCharacterNumber);
        } else {
            if (numberCharacter < 5) {
                return getRandomString(numberCharacter + 1);
            } else {
                const matchingPart = children.slice(0, numberCharacter - 5);
                const randomPart = getRandomString(5);

                return matchingPart + randomPart;
            }
        }
    });

    useEffect(() => {
        const controls = animate(count, children.length + 5, {
            duration: children.length * 0.03,
        })
        return () => controls.stop()
    }, [])

    const MotionTypography = motion(Typography);

    return (
        <MotionTypography variant={variant}>{displayText}</MotionTypography>
    )
}