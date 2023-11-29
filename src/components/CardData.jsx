
const CardWeather = ({ data }) => {
    console.log(data)
    return (
        <div>
            <p>{data.name}</p>
            <p>{data.weather[0].description}</p>
            <img src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`} alt="Imagen" />
            <p>temp. {data.main.temp} C</p>
            <p>sensacion termica {data.main.feels_like} C</p>
        </div>
    )
}
export default CardWeather