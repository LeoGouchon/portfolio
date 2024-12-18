import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, InputLabel, NativeSelect, Skeleton, TextField} from "@mui/material";
import {useQuery} from "@tanstack/react-query";
import {useAuth} from "../../utils/AuthProvider.tsx";

interface formInterface {
    car_category: string,
    car_number: string,
    car_year: number,
    car_championship: string,
    car_model: string,
    team_id: string,
}

interface teamInterface {
    team_id: string,
    team_name: string,
}

export const AddCar = () => {
    const {getToken} = useAuth();

    const [form, setForm] = useState<formInterface>({
        car_category: "",
        car_number: "",
        car_year: 2024,
        car_championship: "",
        car_model: "",
        team_id: "",
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

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(
                `http://localhost:5050/car/${params?.id?.toString()}`
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
    function updateForm(value: any) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    // This function will handle the submission.
    async function onSubmit(e: any) {
        e.preventDefault();
        const car = {
            ...form
        };
        try {
            let response;
            if (isNew) {
                // if we are adding a new record we will POST to /record.
                response = await fetch("http://localhost:5050/car", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getToken()}`
                    },
                    body: JSON.stringify(car),
                });
            } else {
                // // if we are updating a record we will PATCH to /record/:id.
                // TODO: TO IMPLEMENT
                // response = await fetch(`http://localhost:5050/car/${params.id}`, {
                //     method: "PATCH",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(car),
                // });
            }

            if (!response?.ok) {
                throw new Error(`HTTP error! status: ${response?.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({
                car_category: "",
                car_number: "",
                car_year: 2024,
                car_championship: "",
                car_model: "",
                team_id: "",
            });
            navigate("/");
        }
    }

    // This following section will display the form that takes the input from the user.
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
                                <InputLabel htmlFor="car_model">
                                    Car model
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="model"
                                    id="car_model"
                                    value={form.car_model}
                                    onChange={(e) => updateForm({car_model: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="car_number">
                                    #.Number
                                </InputLabel>
                                <TextField
                                    type="number"
                                    name="car_number"
                                    id="car_number"
                                    value={form.car_number}
                                    onChange={(e) => updateForm({car_number: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="car_year">
                                    Year
                                </InputLabel>
                                <TextField
                                    type="number"
                                    name="car_year"
                                    id="car_year"
                                    value={form.car_year}
                                    onChange={(e) => updateForm({car_year: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="car_championship">
                                    Championship
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="car_championship"
                                    id="car_championship"
                                    value={form.car_championship}
                                    onChange={(e) => updateForm({car_championship: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="car_category">
                                    Category
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="car_category"
                                    id="car_category"
                                    value={form.car_category}
                                    onChange={(e) => updateForm({car_category: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="team_id">
                                    Associated team
                                </InputLabel>
                                {isTeamLoading ? <Skeleton variant={"rectangular"}/>
                                    : <NativeSelect
                                        value={form.team_id}
                                        onChange={(e) => updateForm({team_id: e.target.value})}
                                        inputProps={{
                                            name: "TeamId",
                                            id: "team_id"
                                        }}
                                    >
                                        {teamData.map((_: teamInterface) => <option key={_.team_id}
                                                                                    value={_.team_id}>{_.team_name}</option>)}
                                    </NativeSelect>}
                            </div>
                        </div>
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