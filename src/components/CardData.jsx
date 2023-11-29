const CardWeather = ({ data }) => {
    console.log(data)
    return (
        <main className="w-full h-full ">
            <section className="w-full h-1/2 flex flex-col md:flex-row lg:justify-around justify-center ">
                <article className="flex flex-col items-center ">
                    <h3 className="lg:text-[4.5rem] text-[2rem] font-bold ">{data.name} <span className="lg:text-[3rem] text-[1rem] font-semibold ">{data.sys.country}</span></h3>
                    <img className="w-[5rem] lg:w-[10rem]" src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Imagen" />
                    <p className="text-[1rem] lg:text-[1.5rem] font-semibold ">{data.weather[0].description}</p>
                </article>
                <article className="flex flex-col justify-center items-center ">
                    <h2 className=" hidden lg:block lg:text-[2rem] font-semibold ">Temperatura</h2>
                    <h3 className="text-[4rem] lg:text-[12rem] font-bold ">{Math.round(data.main.temp)}°C</h3>
                </article>
            </section>
            <ul className="list-disc pl-4 lg:mx-3  w-full h-1/2  flex flex-col justify-center items-start">
                <li className="mx-2 lg:text-[3rem] font-semibold ">Sensacion termica: <span className="text-[1.5rem] lg:text-[4rem] font-bold ">{Math.round(data.main.feels_like)}°C</span></li>
                <li className="mx-2 lg:text-[3rem] text-[1rem] font-semibold ">Temperatura Min/Max: <span className="text-[1.5rem] lg:text-[4rem] font-bold ">{Math.round(data.main.temp_min)}°C</span> / <span className="text-[1.5rem] lg:text-[4rem] font-bold ">{Math.round(data.main.temp_max)}°C</span></li>
                <li className="mx-2  lg:text-[3rem] text-[1rem] font-semibold ">Humedad: <span className="text-[1.5rem] lg:text-[4rem] font-bold ">{data.main.humidity}%</span></li>
                <li className="mx-2 lg:text-[3rem] text-[1rem] font-semibold ">Presion: <span className="text-[1.5rem] lg:text-[4rem] font-bold ">{data.main.pressure} hPa</span></li>
            </ul>
        </main>
    )
}
export default CardWeather
