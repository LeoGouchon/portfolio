import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";

export const breakpoints = {
    mobile: {index: 1, width: 425, css: '@media (min-width: 425px)'},
    tablet: {index: 2, width: 768, css: '@media (min-width: 768px)'},
    laptop: {index: 3, width: 1024, css: '@media (min-width: 1024px)'},
    laptopL: {index: 4, width: 1440, css: '@media (min-width: 1440px)'},
    laptopXL: {index: 5, width: 2560, css: '@media (min-width: 2560px)'},
}

type ScreenSizeContextType = number;

const ScreenSizeContext = createContext<ScreenSizeContextType>(breakpoints.mobile.index);

export const ScreenSizeProvider: React.FC<{ children: ReactNode }> = ({children}) => {
    const [breakpoint, setBreakpoint] = useState<number>(breakpoints.mobile.index);

    useEffect(() => {
        const calculateBreakpoint = () => {
            const width = window.innerWidth;

            if (width >= breakpoints.laptopXL.width) {
                setBreakpoint(breakpoints.laptopXL.index);
            } else if (width >= breakpoints.laptopL.width) {
                setBreakpoint(breakpoints.laptopL.index);
            } else if (width >= breakpoints.laptop.width) {
                setBreakpoint(breakpoints.laptop.index);
            } else if (width >= breakpoints.tablet.width) {
                setBreakpoint(breakpoints.tablet.index);
            } else {
                setBreakpoint(breakpoints.mobile.index);
            }
        };

        calculateBreakpoint();

        window.addEventListener('resize', calculateBreakpoint);

        return () => {
            window.removeEventListener('resize', calculateBreakpoint);
        };
    }, []);

    return (
        <ScreenSizeContext.Provider value={breakpoint}>
            {children}
        </ScreenSizeContext.Provider>
    );
};

export const useScreenSizeContext = (): number => {
    const context = useContext(ScreenSizeContext);
    if (context === undefined) {
        throw new Error('useScreenSizeContext must be used within a ScreenSizeProvider');
    }
    return context;
};
