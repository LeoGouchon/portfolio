import {
    ChipStyled, ChipWrapper,
    MobileTableCellStyled, NameAndChipWrapper, NameStyled,
    TableCellChipStyled, TableCellShowCaseStyled,
    TableCellStyled, TableRowPrimaryStyled,
    TableRowStyled,
    TableYearStyled, YearStyled
} from "../../Works.style.tsx";
import {Collapse} from "@mui/material";
import {WorkType} from "../../Works.tsx";
import React, {ReactNode} from "react";
import {ShowcaseWork} from "../showcase/ShowcaseWork.tsx";
import {ScreenSizeInterface} from "../../../../global.style.tsx";
import {dateToDisplay} from "../../../../utils/Date.ts";



interface RowWorkProps extends ScreenSizeInterface {
    work: WorkType;
    setHighlightWork: (work: WorkType | undefined) => void;
    highlightWorkId?: WorkType['work_id'];
}

export const RowWork = (props: RowWorkProps): ReactNode => {
    const {work: w, setHighlightWork, highlightWorkId, screensize} = props;

    const handleClick = (w: WorkType) => {
        highlightWorkId === w.work_id ?
            setHighlightWork(undefined) :
            setHighlightWork(w)
    }

    const isOpen = () => highlightWorkId === w.work_id;

    return (
        <React.Fragment>
            <TableRowPrimaryStyled key={w.work_id} onClick={() => {
                handleClick(w)
            }}>
                {screensize > 1 ? <>
                        <TableCellChipStyled>
                            <ChipStyled label={w.work_label}
                                        color={w.work_label as "photography" | "event" | "design" | "programming"}
                                        size={screensize < 3 ? "small" : "medium"}
                                        screensize={screensize}/>
                        </TableCellChipStyled>
                        <TableCellStyled>
                            <NameStyled variant={"h2"}>{w.work_name}</NameStyled>
                        </TableCellStyled>
                        <TableYearStyled>
                            <YearStyled variant={"h3"}>
                                {dateToDisplay(w.work_date_from, w.work_date_to)}
                            </YearStyled>
                        </TableYearStyled>
                    </>
                    : <MobileTableCellStyled>
                        <NameAndChipWrapper screensize={screensize}>
                            <ChipWrapper>
                                <ChipStyled
                                    label={w.work_label}
                                    color={w.work_label as "photography" | "event" | "design" | "programming"}
                                    size={"small"}
                                    screensize={screensize}
                                />
                            </ChipWrapper>
                            <NameStyled variant={"h2"}>{w.work_name}</NameStyled>
                        </NameAndChipWrapper>
                        <YearStyled variant={"h3"}>{dateToDisplay(w.work_date_from, w.work_date_to)}</YearStyled>
                    </MobileTableCellStyled>
                }
            </TableRowPrimaryStyled>
            <TableRowStyled>
                <TableCellShowCaseStyled colSpan={5}>
                    <Collapse in={isOpen()} timeout="auto" unmountOnExit>
                        <ShowcaseWork highlightWork={w}/>
                    </Collapse>
                </TableCellShowCaseStyled>
            </TableRowStyled>
        </React.Fragment>
    )
}