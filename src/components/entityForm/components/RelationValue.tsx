import {Autocomplete, TextField, ToggleButton, ToggleButtonGroup} from "@mui/material";
import React from "react";

type RelationTypeType = "driver" | "team" | "car";
type RelationType = [RelationTypeType, string];

interface RelationValueProps {
    relationValue: RelationType;
    index: number;
    updateValue: (index: number, value: RelationType) => void;
    data: {id: string, value: string}[];
}

export const RelationValue = ({relationValue, index, updateValue, data}:RelationValueProps) => {
    // @ts-ignore
    return (
        <>
            <ToggleButtonGroup
                color="primary"
                value={relationValue[0]}
                exclusive
                onChange={
                    (_: any, newType: RelationTypeType) => {
                        updateValue(index, [newType, ""])
                    }
                }
            >
                <ToggleButton value="driver">Driver</ToggleButton>
                <ToggleButton value="team">Team</ToggleButton>
                <ToggleButton value="car">Car</ToggleButton>
            </ToggleButtonGroup>
            <Autocomplete
                options={data}
                getOptionLabel={_ => _.value}
                clearOnEscape
                sx={{ width: 300 }}
                onChange={(_event: any, newValue: {id: string, value: string}) => {
                    return newValue === null ? updateValue(index, [relationValue[0], ""]) : updateValue(index, [relationValue[0], newValue.id]);
                }}
                renderInput={(params) => <TextField {...params} label="Data" />}
            />
        </>

    )
}