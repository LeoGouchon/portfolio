import {Button, FormControl, FormLabel, Input, Paper, Typography} from "@mui/material";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {useAuth} from "../../utils/AuthProvider.tsx";

interface formInterface {
    email: string,
    password: string,
}

export const Login = () => {
    const {login} = useAuth();

    const [form, setForm] = useState<formInterface>({
        email: "",
        password: "",
    });
    const navigate = useNavigate();

    // These methods will update the state properties.
    function updateForm(value: any) {
        return setForm((prev) => {
            return {...prev, ...value};
        });
    }

    // This function will handle the submission.
    async function onSubmit(e: any) {
        e.preventDefault();
        const user = {
            ...form
        };
        try {
            const response = await fetch(`http://localhost:5050/user/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(user),
            });

            const jwtKey = await response.text();

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            } else {
                login(jwtKey);
            }
        } catch (error) {
            console.error('A problem occurred with your fetch operation: ', error);
        } finally {
            setForm({
                email: "",
                password: ""
            });
            navigate("/");
        }
    }

    return (
        <>
            <Paper
                sx={{
                    width: 300,
                    mx: 'auto', // margin left & right
                    my: 4, // margin top & bottom
                    py: 3, // padding top & bottom
                    px: 2, // padding left & right
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                    borderRadius: 'sm',
                    boxShadow: 'md',
                }}
                variant="outlined"
            >
                <form onSubmit={onSubmit}>
                    <div>
                        <Typography component="h1">
                            <b>Welcome!</b>
                        </Typography>
                        <Typography>Sign in to continue.</Typography>
                    </div>
                    <FormControl>
                        <FormLabel>Email</FormLabel>
                        <Input
                            name="email"
                            type="email"
                            placeholder="johndoe@email.com"
                            onChange={(e) => updateForm({email: e.target.value})}
                        />
                    </FormControl>
                    <FormControl>
                        <FormLabel>Password</FormLabel>
                        <Input
                            name="password"
                            type="password"
                            placeholder="password"
                            onChange={(e) => updateForm({password: e.target.value})}
                        />
                    </FormControl>

                    <Button
                        variant="contained"
                        type="submit"
                    >
                        Log in
                    </Button>
                </form>
            </Paper>
        </>
    );
}