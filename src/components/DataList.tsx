import {useQuery} from "@tanstack/react-query";
import {Alert, Skeleton, Table, TableBody, TableCell, TableHead, TableRow} from "@mui/material";

interface driverInterface {
    driver_id: string;
    driver_first_name: string;
    driver_last_name: string;
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

export const DataList = () => {
    const {data: driverData, isLoading: isDriverLoading, error: driverError} = useQuery({
        queryKey: ["drivers"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/driver');
            return response.json();
        }
    })

    const {data: teamData, isLoading: isTeamLoading, error: teamError} = useQuery({
        queryKey: ["teams"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/team');
            return response.json();
        }
    })

    const {data: carData, isLoading: isCarLoading, error: carError} = useQuery({
        queryKey: ["cars"],
        queryFn: async () => {
            const response = await fetch('http://localhost:5050/car');
            return response.json();
        }
    })

    return (
        <>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Driver id</TableCell>
                        <TableCell>Driver first name</TableCell>
                        <TableCell>Driver last name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        isDriverLoading
                            ? <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                            : driverError || driverData === undefined ?
                                <Alert severity="error">Error while fetching drivers.</Alert>
                                : driverData.map((_: driverInterface) =>
                                    <TableRow key={_.driver_id}>
                                        <TableCell>{_.driver_id}</TableCell>
                                        <TableCell>{_.driver_first_name}</TableCell>
                                        <TableCell>{_.driver_last_name}</TableCell>
                                    </TableRow>
                                )
                    }
                </TableBody>
            </Table>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Team id</TableCell>
                        <TableCell>Team name</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        isTeamLoading
                            ? <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                            : teamError || teamData === undefined ?
                                <Alert severity="error">Error while fetching teams.</Alert>
                                : teamData.map((_: teamInterface) =>
                                    <TableRow key={_.team_id}>
                                        <TableCell>{_.team_id}</TableCell>
                                        <TableCell>{_.team_name}</TableCell>
                                    </TableRow>
                                )
                    }
                </TableBody>
            </Table>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Car id</TableCell>
                        <TableCell>Car championship</TableCell>
                        <TableCell>Car category</TableCell>
                        <TableCell>Car number</TableCell>
                        <TableCell>Car model</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        isCarLoading
                            ? <Skeleton variant="text" sx={{fontSize: '1rem'}}/>
                            : carError || carData === undefined ?
                                <Alert severity="error">Error while fetching cars.</Alert>
                                : carData.map((_: carInterface) =>
                                    <TableRow key={_.car_id}>
                                        <TableCell>{_.car_id}</TableCell>
                                        <TableCell>{_.car_championship}</TableCell>
                                        <TableCell>{_.car_category}</TableCell>
                                        <TableCell>{_.car_number}</TableCell>
                                        <TableCell>{_.car_model}</TableCell>
                                    </TableRow>
                                )
                    }
                </TableBody>
            </Table>
        </>
    )
}