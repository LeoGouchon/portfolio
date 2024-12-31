import {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import {Button, InputLabel, TextField} from "@mui/material";
import {useAuth} from "../../providers/AuthProvider.tsx";

interface formInterface {
    team_name: string,
}

export const AddTeam = () => {
    const { getToken } = useAuth();
    const [form, setForm] = useState<formInterface>({
        team_name: "",
    });
    const [isNew, setIsNew] = useState(true);
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const id = params.id?.toString() || undefined;
            if (!id) return;
            setIsNew(false);
            const response = await fetch(
                `http://localhost:5050/team/${params?.id?.toString()}`
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
        const team = {
            ...form
        };
        try {
            let response;
            if (isNew) {
                // if we are adding a new record we will POST to /record.
                response = await fetch("http://localhost:5050/team", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${getToken()}`
                    },
                    body: JSON.stringify(team),
                });
            } else {
                // if we are updating a record we will PATCH to /record/:id.
                // TODO: TO IMPLEMENT
                // response = await fetch(`http://localhost:5050/team/${params.id}`, {
                //     method: "PATCH",
                //     headers: {
                //         "Content-Type": "application/json",
                //     },
                //     body: JSON.stringify(team),
                // });
            }

            if (!response?.ok) {
                throw new Error(`HTTP error! status: ${response?.status}`);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({
                team_name: ""
            });
            navigate("/");
        }
    }

    // This following section will display the form that takes the input from the user.
    return (
        <>
            <h3> Create/Update Team</h3>
            <form
                onSubmit={onSubmit}
            >
                <div>
                    <div>
                        <h2>
                            Team Info
                        </h2>
                    </div>
                    <div>
                        <div>
                            <div>
                                <InputLabel htmlFor="team_name">
                                    Team Name
                                </InputLabel>
                                <TextField
                                    type="text"
                                    name="firstName"
                                    id="team_name"
                                    value={form.team_name}
                                    onChange={(e) => updateForm({team_name: e.target.value})}
                                />
                            </div>
                        </div>

                    </div>
                </div>
                <Button
                    variant="contained"
                    type="submit"
                >
                    Save Team Record
                </Button>
            </form>
        </>
    );
}