import {TableContainerStyled, TableFirstRowStyled, TableHeadStyled} from "../../Works.style.tsx";
import {TableBody, TableCell, Table} from "@mui/material";
import {RowWork} from "../row/rowWork.tsx";
import {WorkType} from "../../Works.tsx";
import {useScreenSizeContext} from "../../../../providers/ScreenSizeProvider.tsx";
import React, {useState} from "react";
import data from "../../../../data/works.json";

interface WorksTableProps {
    filter: string[];
}

export const WorksTable = React.memo(({filter}: WorksTableProps) => {
    const screenSize = useScreenSizeContext();

    const [highlightWork, setHighlightWork] = useState<WorkType | undefined>();

    const worksData = data.sort((a: WorkType, b: WorkType) => new Date(b.work_date_from).getTime() - new Date(a.work_date_from).getTime())

    return (
        <TableContainerStyled>
            <Table size="small">
                <TableHeadStyled>
                    <TableFirstRowStyled>
                        <TableCell width={"100%"}></TableCell>
                    </TableFirstRowStyled>
                </TableHeadStyled>
                <TableBody>
                    {
                        worksData?.filter((w: WorkType) => filter.includes(w.work_label) || filter.length === 0).map((work: WorkType) => (
                            <RowWork
                                key={work.work_id}
                                screensize={screenSize}
                                work={work}
                                setHighlightWork={setHighlightWork}
                                highlightWorkId={highlightWork?.work_id}
                            />
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainerStyled>
    )
})