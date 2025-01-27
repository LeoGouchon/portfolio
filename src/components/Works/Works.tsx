import {
    Alert,
    Chip,
    FormControl, InputLabel, MenuItem, Select,
    SelectChangeEvent,
    Table,
    TableBody,
    TableCell,
    Typography,
} from "@mui/material";
import {
    GlobalWrapper,
    NumberAnimation,
    SelectedTags, SelectWrapper,
    TableAndFilterWrapper,
    TableContainerStyled, TableFirstRowStyled, TableHeadStyled,
    TableYearStyled, TitleAndShowcaseWrapper,
    TitleWrapper,
    WorksListWrapper
} from "./Works.style.tsx";
import {useState} from "react";
import {useScreenSizeContext} from "../../providers/ScreenSizeProvider.tsx";
import {RowWork} from "./components/row/rowWork.tsx";
import data from "../../data/works.json";

export type WorkType = {
    work_id: number
    work_name: string;
    work_short_description: string;
    work_image_showcase: string;
    work_dedicated_page: any[] | null; // TODO
    work_label: string;
    work_date_from: string;
    work_date_to: string;
    work_relative_path: string | null;
}

export const Works = () => {
    const fields = ["event", "photography", "design", "programming"];

    const screenSize: number = useScreenSizeContext();

    const [fieldFilter, setFieldFilter] = useState<string[]>([]);
    const [highlightWork, setHighlightWork] = useState<WorkType | undefined>();

    const worksData = data.sort((a: WorkType, b: WorkType) => new Date(b.work_date_from).getTime() - new Date(a.work_date_from).getTime())

    const countWorks = worksData.length;

    const handleChange = (event: SelectChangeEvent<typeof fieldFilter>) => {
        const {
            target: {value},
        } = event;
        setFieldFilter(
            typeof value === 'string' ? value.split(',') : value,
        );
    };

    const handleDelete = (chipToDelete: string) => {
        setFieldFilter((field) => field.filter(value => chipToDelete !== value))
    }

    return (
        <GlobalWrapper>
            {
                screenSize >= 4 &&
                <TitleAndShowcaseWrapper>
                    <TitleWrapper>
                        <Typography variant={"h1"}>It's about </Typography>
                        <Typography variant={"h1"}><NumberAnimation
                            projectCount={countWorks ?? 0}/> projects</Typography>
                    </TitleWrapper>
                </TitleAndShowcaseWrapper>
            }
            <WorksListWrapper screensize={screenSize}>
                {
                    screenSize < 4 &&
                    <TitleWrapper>
                        <Typography variant={"h1"}>It's about </Typography>
                        <Typography variant={"h1"}><NumberAnimation
                            projectCount={countWorks ?? 0}/> projects</Typography>
                    </TitleWrapper>
                }
                <TableAndFilterWrapper screensize={screenSize}>
                    <FormControl variant={"filled"}>
                        <SelectWrapper screensize={screenSize}>
                            {
                                fieldFilter.length === 0 &&
                                <InputLabel id="field-filter">Fields</InputLabel>
                            }
                            <Select
                                labelId="field-filter"
                                id="field-filter"
                                multiple
                                color={"secondary"}
                                value={fieldFilter}
                                variant={"outlined"}
                                onChange={handleChange}
                                renderValue={(tags: string[]) =>
                                    <SelectedTags>
                                        {
                                            tags.map((value: string) => (
                                                <Chip
                                                    size={"small"}
                                                    key={value}
                                                    label={value}
                                                    color={value as "photography" | "event" | "design" | "programming"}
                                                    onMouseDown={(event) => event.stopPropagation()}
                                                    onDelete={() => handleDelete(value)}
                                                />
                                            ))
                                        }
                                    </SelectedTags>
                                }
                            >
                                {fields.map((name: string) => (
                                    <MenuItem
                                        key={name}
                                        value={name}
                                        divider
                                    >
                                        {name}
                                    </MenuItem>
                                ))}
                            </Select>
                        </SelectWrapper>
                    </FormControl>
                    <Alert severity="info">Tous les projets n'ont pas encore été complétés. Si vous voulez en apprendre davantage, n'hésitez pas à me contacter.</Alert>
                    <TableContainerStyled>
                        <Table size="small">
                            <TableHeadStyled>
                                {screenSize != 1 ?
                                    <TableFirstRowStyled>
                                        <TableCell width={"fit-content"}></TableCell>
                                        <TableCell width={"100%"}></TableCell>
                                        <TableYearStyled></TableYearStyled>
                                    </TableFirstRowStyled>
                                    : <TableFirstRowStyled>
                                        <TableCell width={"100%"}></TableCell>
                                    </TableFirstRowStyled>
                                }
                            </TableHeadStyled>
                            <TableBody>
                                {
                                        worksData?.filter((w: WorkType) => fieldFilter.includes(w.work_label) || fieldFilter.length === 0).map((work: WorkType) => (
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
                </TableAndFilterWrapper>
            </WorksListWrapper>
        </GlobalWrapper>
    )
        ;
};