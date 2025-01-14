export const getGapValue = (screenSize: number, returnFormat: "number" | "string" = "string") => {
    /**
     * Return the gap / extern padding value to use depending the screenSize
     *
     * @param screenSize - index of the screen size [ScreenSizeProvider.tsx](../providers/ScreenSizeProvider.tsx)
     * @param returnFormat - default: "string". "number" | "string" authorized
     * @return gap value in string (eg: "20px")
     */
    if (screenSize <= 3) {
        return returnFormat === "number" ? 8 : "8px";
    } else return returnFormat === "number" ? 20 : "20px";
}

export const getColNumber = (screenSize: number) => {
    switch (screenSize) {
        case 1:
        case 2:
            return 2;
        case 3:
        case 4:
        case 5:
        default:
            return 3;
    }
}