import { Button } from "@mui/material";


function ButtonSearch({ getWeather, loading }) {
    return (
        <Button variant="contained" onClick={getWeather} disabled={loading}>
            {loading ? "Loading..." : "Buscar"}
        </Button>
    );
}

export default ButtonSearch;
