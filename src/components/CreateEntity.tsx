import {Tab, Tabs} from "@mui/material";
import React, {useState} from "react";
import {AddDriver} from "./entityForm/AddDriver.tsx";
import {AddTeam} from "./entityForm/AddTeam.tsx";
import {AddCar} from "./entityForm/AddCar.tsx";
import {AddCard} from "./entityForm/AddCard.tsx";
import {GlobalWrapper} from "./entityForm/AddEntity.style.tsx";

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
            <Tab label={"card"} id={"card"}/>
        </Tabs>
            <GlobalWrapper>
                {tabValue === 0 && (<AddDriver/>)}
                {tabValue === 1 && (<AddTeam/>)}
                {tabValue === 2 && (<AddCar />)}
                {tabValue === 3 && (<AddCard />)}
            </GlobalWrapper>
        </>
    )
}