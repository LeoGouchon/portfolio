import {Avatar, CardActions, CardHeader, IconButton, Tab, Tabs} from "@mui/material";
import {
    CardActionsWrapper,
    CardTabs,
    DriverCardVisual,
    DriverCardVisualWrapper,
    DriverInformation,
    DriverWrapper, TabStyled
} from "./Card.style.tsx";
import {Looks3, Looks4, Looks5, LooksOne, LooksTwo} from "@mui/icons-material";
import React, {useState} from "react";

interface dataInterface {
    driver_id: string;
    driver_first_name: string;
    driver_last_name: string;
    car_model: string;
    car_number: string;
    car_category: string;
    team_name: string;
}

export const Card = ({data}: { data: dataInterface }) => {
    const [tabValue, setTabValue] = useState(0)

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <DriverWrapper>
            {data.driver_last_name === "Sato" ?
                <DriverCardVisualWrapper>
                    <DriverCardVisual img={"src/assets/Card/MarinoSato05.png"}/>
                </DriverCardVisualWrapper>
                : <DriverCardVisualWrapper>
                    <DriverCardVisual img={""}/>
                </DriverCardVisualWrapper>
            }
            <DriverInformation>
                <CardHeader
                    title={data.driver_first_name + " " + data.driver_last_name}
                    subheader={data.team_name}
                    avatar={
                        <Avatar>{data.car_number}</Avatar>
                    }
                />
                <CardActionsWrapper>
                    <CardTabs value={tabValue} onChange={handleTabChange}>
                        <TabStyled icon={<LooksOne/>}/>
                        <TabStyled icon={<LooksTwo/>}/>
                        <TabStyled icon={<Looks3/>}/>
                        <TabStyled icon={<Looks4/>}/>
                        <TabStyled icon={<Looks5/>}/>
                    </CardTabs>
                </CardActionsWrapper>
            </DriverInformation>
        </DriverWrapper>
    )
}