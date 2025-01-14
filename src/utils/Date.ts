export const dateToDisplay = (from: string, to: string) => {
    /**
     * give year of beginning and end of an event
     *
     * @param from - string
     * @param to - string
     * @return String (eg: "2021 - 2023" or "2023")
     */
    const fromDate = new Date(from);
    const toDate = new Date(to);
    if (!to || fromDate.getFullYear() === toDate.getFullYear()) {
        return fromDate.getFullYear().toString();
    } else {
        return fromDate.getFullYear() + " - " + toDate.getFullYear();
    }
};