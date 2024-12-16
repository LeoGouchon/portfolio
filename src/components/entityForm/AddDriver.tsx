import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, InputLabel, NativeSelect, Skeleton, TextField} from "@mui/material";
import {useQuery} from "@tanstack/react-query";

interface formInterface {
    driver_name: string,
    driver_last_name: string,
    driver_team: string,
    driver_car: number | string,
}

interface teamInterface {
    team_id: string,
    team_name: string,
}

interface carInterface {
    car_id: string,
    car_model: string,
    car_category: string,
    car_number: string,
    car_championship: string,
    car_year: number,
    car_fk_team_id: string,
}

export const AddDriver = () => {
    const [form, setForm] = useState<formInterface>({
        driver_name: "",
        driver_last_name: "",
        driver_team: "",
        driver_car: "",
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

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(
                `http://localhost:5050/driver/${params?.id?.toString()}`
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
        const driver = {
            ...form,
            driver_car: form.driver_car === "" ? null : form.driver_car,
            driver_team: form.driver_team === "" ? null : form.driver_team
        };
        try {
            let response;
            if (isNew) {
                // if we are adding a new record we will POST to /record.
                response = await fetch("http://localhost:5050/driver", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(driver),
                });
            } else {
                // if we are updating a record we will PATCH to /record/:id.
                response = await fetch(`http://localhost:5050/driver/${params.id}`, {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(driver),
                });
            }

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({
                driver_name: "",
                driver_last_name: "",
                driver_team: "null",
                driver_car: "null",
            });
            navigate("/");
        }
    }

    // This following section will display the form that takes the input from the user.
    return (
        <>
            <h3> Create/Update Driver</h3>
            <form
                onSubmit={onSubmit}
            >
                <div>
                    <div>
                        <h2>
                            Driver Info
                        </h2>
                    </div>

                    <div>
                        <div>
                            <div>
                                <InputLabel htmlFor="driver_name">
                                    First name
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="firstName"
                                    id="driver_name"
                                    value={form.driver_name}
                                    onChange={(e) => updateForm({driver_name: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="driver_last_name">
                                    Last name
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="lastName"
                                    id="driver_last_name"
                                    value={form.driver_last_name}
                                    onChange={(e) => updateForm({driver_last_name: e.target.value})}
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="driver_team">
                                    Team Name
                                </InputLabel>
                                {isTeamLoading ? <Skeleton variant={"rectangular"}/>
                                    : <NativeSelect
                                        value={form.driver_team}
                                        onChange={(e) => updateForm({driver_team: e.target.value})}
                                        inputProps={{
                                            name: "DriverTeam",
                                            id: "driver_team"
                                        }}
                                    >
                                        {teamData.map((_: teamInterface) => <option key={_.team_id} value={_.team_id}>{_.team_name}</option>)}
                                    </NativeSelect>}
                            </div>
                        </div>
                        <div>
                            <div>
                                <InputLabel htmlFor="driver_car_number">
                                    Car Number
                                </InputLabel>
                                {
                                    isCarLoading ? <Skeleton variant={"rectangular"}/>
                                        : <NativeSelect
                                        value={form.driver_car}
                                        onChange={(e) => updateForm({driver_car: e.target.value})}
                                        inputProps={{
                                            name:"carNumber",
                                            id:"driver_car_number"
                                        }}
                                        >
                                            {carData.filter((_:carInterface) => _.car_fk_team_id === form.driver_team).map((_: carInterface) =>
                                                <option key={_.car_id} value={_.car_id}>{_.car_number + " : " + _.car_category + " " + _.car_model}</option>)}
                                        </NativeSelect>
                                }
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