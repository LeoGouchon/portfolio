import {
    Alert,
    Chip,
    FormControl, InputLabel, MenuItem, Select,
    SelectChangeEvent,
    Typography,
} from "@mui/material";
import {
    GlobalWrapper,
    NumberAnimation,
    SelectedTags, SelectWrapper,
    TableAndFilterWrapper,
    TitleAndShowcaseWrapper,
    TitleWrapper,
    WorksListWrapper
} from "./Works.style.tsx";
import React, {useState} from "react";
import {useScreenSizeContext} from "../../providers/ScreenSizeProvider.tsx";
import data from "../../data/works.json";
import {WorksTable} from "./components/worksTable/WorksTable.tsx";

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

export const Works = React.memo(() => {
    const fields = ["event", "photography", "design", "programming"];

    const screenSize: number = useScreenSizeContext();

    const [fieldFilter, setFieldFilter] = useState<string[]>([]);

    const countWorks = data.length;

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
                    <Alert severity="info">Tous les projets n'ont pas encore été complétés. Si vous voulez en apprendre
                        davantage, n'hésitez pas à me contacter.</Alert>
                    <WorksTable filter={fieldFilter}/>
                </TableAndFilterWrapper>
            </WorksListWrapper>
        </GlobalWrapper>
    );
})