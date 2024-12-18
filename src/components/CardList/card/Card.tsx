import {Avatar, CardHeader, Skeleton} from "@mui/material";
import {
    CardActionsWrapper,
    CardTabs,
    DriverCardVisual,
    DriverCardVisualWrapper,
    DriverInformation,
    DriverWrapper, TabStyled
} from "./Card.style.tsx";
import {Looks3, Looks4, Looks5, LooksOne, LooksTwo} from "@mui/icons-material";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";

interface dataInterface {
    driver_id: string;
    driver_first_name: string;
    driver_last_name: string;
    car_model: string;
    car_number: string;
    car_category: string;
    team_name: string;
    has_card: boolean;
}

interface cardInterface {
    card_id: string;
    card_rarity: number;
    card_url: string
}

export const Card = ({data}: { data: dataInterface }) => {

    const {data: cardsData, isLoading: isCardsLoading} = useQuery<cardInterface[]>({
        queryKey: ["card", "driver_id", data.driver_id],
        queryFn: async () => {
            const response = await fetch(`http://localhost:5050/card/driver/${data.driver_id}`);
            return response.json();
        }
    })

    const [tabValue, setTabValue] = useState(data.has_card ? 4 : 0)

    const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
        setTabValue(newValue)
    }

    return (
        <DriverWrapper>
            {data.has_card ?
                isCardsLoading ? <Skeleton variant={"rectangular"}/>
                    :<DriverCardVisualWrapper>
                    <DriverCardVisual img={
                        cardsData?.find(card => card.card_rarity === tabValue + 1)?.card_url ?? "https://i.ibb.co/xCdSGnm/unknow.png"
                    } isUnknow={false}/>
                </DriverCardVisualWrapper>
                : <DriverCardVisualWrapper>
                    <DriverCardVisual img={"https://i.ibb.co/PxB1F7z/unknow.png"} isUnknow={true}/>
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
                {data.has_card &&
                    <CardActionsWrapper>
                        <CardTabs value={tabValue} onChange={handleTabChange}>
                            <TabStyled icon={<LooksOne/>} disabled={!cardsData?.find(card => card.card_rarity === 1)}/>
                            <TabStyled icon={<LooksTwo/>} disabled={!cardsData?.find(card => card.card_rarity === 2)}/>
                            <TabStyled icon={<Looks3/>} disabled={!cardsData?.find(card => card.card_rarity === 3)}/>
                            <TabStyled icon={<Looks4/>} disabled={!cardsData?.find(card => card.card_rarity === 4)}/>
                            <TabStyled icon={<Looks5/>} disabled={!cardsData?.find(card => card.card_rarity === 5)}/>
                        </CardTabs>
                    </CardActionsWrapper>}
            </DriverInformation>
        </DriverWrapper>
    )
}