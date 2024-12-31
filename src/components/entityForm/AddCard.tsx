import {SyntheticEvent, useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useQuery} from "@tanstack/react-query";
import AddIcon from '@mui/icons-material/Add';
import ClearIcon from '@mui/icons-material/Clear';
import {Button, InputLabel, Rating, TextField} from "@mui/material";
import {RelationValue} from "./components/RelationValue.tsx";
import {CardPreviewWrapper, RelationsWrapper, RelationWrapper} from "./AddEntity.style.tsx";
import {DriverCardVisual} from "../CardList/card/Card.style.tsx";
import {useAuth} from "../../providers/AuthProvider.tsx";

type cardRelationType = ["driver" | "team" | "car", string];

interface formInterface {
    cardRarity: number;
    cardURL: string;
    cardRelations: cardRelationType[];
}

export const AddCard = () => {
    const {getToken} = useAuth();

    const [form, setForm] = useState<formInterface>({
        cardRarity: 1,
        cardURL: "",
        cardRelations: [],
    });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    const {data: teamData, isLoading: isTeamLoading} = useQuery({
        queryKey: ["teams"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/team');
            return response.json();
        }
    })

    const {data: carData, isLoading: isCarLoading} = useQuery({
        queryKey: ["cars"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/car');
            return response.json();
        }
    })

    const {data: driverData, isLoading: isDriverLoading} = useQuery({
        queryKey: ["drivers"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/driver');
            return response.json();
        }
    })


    useEffect(() => {
        const fetchData = async () => {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(
                `http://localhost:5050/card/${params?.id?.toString()}`
            );
            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                console.error(message);
                return;
            }
            const record = await response.json();
            if (!record) {
                console.warn(`Record with id ${id} not found`);
                navigate("/");
                return;
            }
            setForm(record);
        }

        fetchData();
        return;
    }, [params.id, navigate]);

    // These methods will update the state properties.
    const updateForm = (value: any) => {
        return setForm((prev: formInterface) => {
            return {...prev, ...value};
        });
    }

    const addCardRelation = () => {
        return updateForm({...form, cardRelations: [...form.cardRelations, ["driver", ""]]});
    }

    const removeCardRelation = (index: number) => {
        return updateForm({
            ...form,
            cardRelations: form.cardRelations.filter((_: cardRelationType, i: number) => i !== index)
        });
    }

    const updateCardRelation = (indexToUpdate: number, value: cardRelationType) => {
        return updateForm({
            ...form,
            cardRelations: form.cardRelations.map((relation: cardRelationType, index: number) => (index === indexToUpdate ? value : relation))
        })
    }

    // This function will handle the submission.
    const onSubmit = async (e: any) => {
        e.preventDefault();
        const card = {
            ...form
        };
        try {
            let response;
            if (isNew) {
                // if we are adding a new record we will POST to /record.
                response = await fetch("http://localhost:5050/card", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getToken()}`
                    },
                    body: JSON.stringify(card),
                });
            } else {
                // if we are updating a record we will PATCH to /record/:id.
                // TODO : TO IMPLEMENT
                // response = await fetch(`http://localhost:5050/card/${params.id}`, {
                //     method: "PATCH",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(card),
                // });
            }

            if (!response?.ok) {
                throw new Error(`HTTP error! status: ${response?.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({
                cardRarity: 1,
                cardURL: "",
                cardRelations: [],
            });
            navigate("/");
        }
    }

    const getDataFromRelationType = (relationType: "driver" | "team" | "car"): { id: string, value: string }[] => {
        switch (relationType) {
            case "driver":
                return !isDriverLoading ? driverData.map((_: any) => {
                        return ({
                            id: _.driver_id,
                            value: `${_.driver_first_name} ${_.driver_last_name}`
                        })
                    }
                ) : []
            case "car":
                return !isCarLoading ? carData.map((_: any) => {
                        return ({
                            id: _.car_id,
                            value: `${_.car_championship} ${_.car_year} #${_.car_number} ${_.car_model}`
                        })
                    }
                ) : []
            case "team":
                return !isTeamLoading ? teamData.map((_: any) => {
                        return ({
                            id: _.team_id,
                            value: _.team_name
                        })
                    }
                ) : []
        }
    }

    return (
        <>
            <h3> Create/Update Car</h3>
            <form
                onSubmit={onSubmit}
            >
                <div>
                    <div>
                        <h2>
                            Car Info
                        </h2>
                    </div>

                    <div>
                        <div>
                            <div>
                                <InputLabel htmlFor="cardRarity">
                                    Card rarity
                                </InputLabel>
                                <Rating
                                    size={"large"}
                                    name="cardRarity"
                                    value={form.cardRarity}
                                    onChange={(_event: SyntheticEvent, newValue: number | null) => {
                                        updateForm({cardRarity: newValue === null || newValue === 0 ? form.cardRarity : newValue});
                                    }}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="cardURL">
                                    URL card visual
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="cardURL"
                                    id="cardURL"
                                    value={form.cardURL}
                                    onChange={(e) => updateForm({cardURL: e.target.value})}
                                />
                                <CardPreviewWrapper>
                                    <DriverCardVisual img={
                                        form.cardURL != "" ? form.cardURL : "https://i.ibb.co/PxB1F7z/unknow.png"
                                    } isUnknow={false}/>
                                </CardPreviewWrapper>
                            </div>
                        </div>
                        <h2>RELATIONS</h2>
                        <RelationsWrapper>
                            <Button
                                variant="contained"
                                type="button"
                                onClick={_ => addCardRelation()}
                            >
                                <AddIcon/>
                            </Button>
                            {
                                form.cardRelations.map((relation: cardRelationType, index: number) =>
                                    // TODO : KEY MUST BE CHANGED. IT IS NOT STABLE AND THE RENDER IS BROKEN
                                    <RelationWrapper key={index}>
                                        <Button
                                            variant="contained"
                                            type="button"
                                            onClick={_ => removeCardRelation(index)}
                                        >
                                            <ClearIcon/>
                                        </Button>
                                        <RelationValue relationValue={relation} index={index}
                                                       updateValue={updateCardRelation}
                                                       data={getDataFromRelationType(relation[0])
                                                       }/>
                                    </RelationWrapper>
                                )
                            }
                        </RelationsWrapper>
                    </div>
                </div>
                <Button
                    variant="contained"
                    type="submit"
                >
                    Save Driver Record
                </Button>
            </form>
        </>
    );
}