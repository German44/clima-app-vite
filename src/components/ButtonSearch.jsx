import { Button } from "@mui/material";


function ButtonSearch({ getWeather, loading }) {
    return (
        <>
            {/* <Button variant="contained" onClick={getWeather} disabled={loading}>
                {loading ? "Cargando..." : "Buscar"}
            </Button> */}
            <button
                onClick={getWeather}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                {loading ? "Cargando..." : "Buscar"}
            </button>
        </>
    );
}

export default ButtonSearch;
