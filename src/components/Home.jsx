import axios from 'axios';
import { useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import CardData from './CardData';
import ButtonSearch from './ButtonSearch';
import { TextField } from '@mui/material';

export default function Home() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState({});
    const [loading, setLoading] = useState(false);
    const apiKey = import.meta.env.VITE_WEATHER_KEY;


    const getWeather = async (e) => {
        e.preventDefault();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
        setLoading(true);
        try {
            const response = await axios.get(apiUrl);
            setWeather(response.data);
            console.log(response.data);
            setCity("");
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="bg-cover bg-no-repeat bg-center bg-site w-full h-[97vh]">
            <div className="flex flex-col items-center rounded bg-black/10 backdrop-blur-lg w-full h-full">
                {/* Input and title */}
                <header className="w-full flex flex-wrap items-center justify-around mb-2">
                    <h1 className="text-3xl font-semibold">Weather App.</h1>
                    <div className="flex items-center mt-4 gap-5">
                        <TextField
                            value={city}
                            onChange={(e) => setCity(e.target.value)}
                            label="Ciudad"
                            variant="standard"
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                        />
                        <ButtonSearch getWeather={getWeather} loading={loading} />
                    </div>
                </header>
                <div className="w-3/4 lg:min-h-[500px] min-h-[500px] bg-white/10 backdrop-blur-lg rounded-2xl p-4">
                    {weather.main && <CardData data={weather} />}
                </div>
            </div>
        </div>
    );
}
