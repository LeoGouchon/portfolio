import {Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {Driver} from "./entityForm/Driver.tsx";
import {Team} from "./entityForm/Team.tsx";
import {Car} from "./entityForm/Car.tsx";

export const CreateEntity = () => {
    const [tabValue, setTabValue] = useState(0)

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <>
        <Tabs
            value={tabValue}
            onChange={handleTabChange}
        >
            <Tab label={"driver"} id={"driver"}/>
            <Tab label={"team"} id={"team"}/>
            <Tab label={"car"} id={"car"}/>
        </Tabs>
            <div>
                {tabValue === 0 && (<Driver/>)}
                {tabValue === 1 && (<Team/>)}
                {tabValue === 2 && (<Car />)}
            </div>
        </>
    )
}