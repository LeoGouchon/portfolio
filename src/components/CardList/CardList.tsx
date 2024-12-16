import {FormControlLabel, Skeleton, Switch} from "@mui/material";
import {
    CardWrapper, FilterOrderWrappper, GlobalWrapper
} from "./CarList.style.tsx";
import {useQuery} from "@tanstack/react-query";
import {Card} from "./Card/Card.tsx";
import {useState} from "react";

interface seasonEntity {
    driver_id: string;
    driver_first_name: string;
    driver_last_name: string;
    car_model: string;
    car_number: string;
    car_category: string;
    team_name: string;
    has_card: boolean;
}

export const CardList = () => {
    const {data: seasonData, isLoading: isSeasonLoading} = useQuery({
        queryKey: ["seasons", "wec", "2025"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/season?championship=WEC&year=2025');
            return response.json();
        }
    })

    const [viewNoCard, setViewNoCard] = useState(true);

    return (
        <GlobalWrapper>
            <FilterOrderWrappper>
                <FormControlLabel control={<Switch
                    value="check"
                    checked={viewNoCard}
                    color={"primary"}

                    onChange={() => setViewNoCard((prevSelected: boolean) => !prevSelected)}
                />} label={"Display also no card driver"} />
            </FilterOrderWrappper>
            <CardWrapper>
                {isSeasonLoading ? <Skeleton variant={"rectangular"}/>
                    : seasonData.filter((a:seasonEntity) => viewNoCard || a.has_card).sort((a: seasonEntity, b: seasonEntity) => ((b.has_card ? 1 : 0) - (a.has_card ? 1 : 0)  || parseInt(a.car_number) - parseInt(b.car_number))).map((_: seasonEntity) =>
                        <Card key={_.driver_id} data={_} />
                    )
                }
            </CardWrapper>
        </GlobalWrapper>
    )
}