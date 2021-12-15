import './WeatherHeader.css'



const WeatherHeader = ({
    data
}) => {

    return (
        <div className="weather-header">
            {
                data?.sys.country === "BG" ? (<div className="weather-header">
                    <p>{data?.name}, </p>
                    {
                        data?.main?.temp < 5
                            ? <i className="fal fa-temperature-frigid"></i>
                            : <i className="fal fa-temperature-hot"></i>
                    }
                    <p>{data?.main?.temp}</p>
                </div>) : ''
            }
        </div>
    )
}


export default WeatherHeader