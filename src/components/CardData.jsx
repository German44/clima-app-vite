
const CardWeather = ({ data }) => {
    console.log(data)
    return (
        <div className="w-full h-full ">
            <div className="w-full h-1/2 flex justify-around    ">
                <div className="flex flex-col items-center ">
                    <h3 className="text-[4.5rem] font-bold ">{data.name} <span className="text-[3rem] font-semibold ">{data.sys.country}</span></h3>
                    <img className="w-[10rem]" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Imagen" />
                    <p className="text-[1.5rem] font-semibold ">{data.weather[0].description}</p>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h2 className="text-[2rem] font-semibold ">Temperatura</h2>
                    <h3 className="text-[12rem] font-bold ">{Math.round(data.main.temp)}°C</h3>
                </div>
            </div>
            <div className="w-full h-1/2 ">
                <h3 className="mx-3 text-[3rem] font-semibold ">Sensacion termica: <span className="text-[4rem] font-bold ">{Math.round(data.main.feels_like)}°C</span></h3>
                <h3 className="mx-3  text-[3rem] font-semibold ">Temperatura Min/Max: <span className="text-[4rem] font-bold ">{Math.round(data.main.temp_min)}°C</span> / <span className="text-[4rem] font-bold ">{Math.round(data.main.temp_max)}°C</span></h3>
                <h3 className="mx-3 text-[3rem] font-semibold ">Humedad: <span className="text-[4rem] font-bold ">{data.main.humidity}%</span></h3>
                <h3 className="mx-3 text-[3rem] font-semibold ">Presion: <span className="text-[4rem] font-bold ">{data.main.pressure}hPa</span></h3>



            </div>
        </div>
    )
}
export default CardWeather