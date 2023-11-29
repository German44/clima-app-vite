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

    const getWeather = async (e) => {
        e.preventDefault();
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_WEATHER_KEY}`;
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
        <div className="bg-cover bg-no-repeat bg-center bg-site w-full h-screen">
            <div className="flex flex-col items-center justify-around rounded bg-black/10 backdrop-blur-lg w-full h-screen">
                {/* Input and title */}
                <header className="w-full flex flex-wrap items-center justify-between p-8">
                    <h1 className="text-3xl font-semibold">Weather App.</h1>
                    <div className="flex items-center gap-5">
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
                <div className="w-3/4 bg-white/10 backdrop-blur-lg p-4">
                    {weather.main && <CardData data={weather} />}
                </div>
            </div>
        </div>
    );
}
