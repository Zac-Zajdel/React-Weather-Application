import React from 'react';
import Titles from './Components/Titles';
import Form from './Components/Form';
import Weather from './Components/Weather';

const API_KEY = "d8bd6b7e4f8aa64693594808e8cb0819";

class App extends React.Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=fahrenheit`);
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please Enter The Values Needed"
      });
    }
  }

  render() {
    const { temperature, city, country, humidity, description, error } = this.state;
    return (
      <div>
        <div className="wrapper">
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="col-sm-5 title-container">
                  <Titles />
                </div>
                <div className="col-sm-7 form-container">
                  <Form getWeather={this.getWeather} />
                  <Weather
                    temperature={temperature} city={city}
                    country={country}
                    humidity={humidity}
                    description={description}
                    error={error}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;