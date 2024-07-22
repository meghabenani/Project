import "./App.css";
import { useState, useEffect } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function App() {
  let [dark, setDark] = useState(false);
  let [day, setDay] = useState("");

  let [input, setInput] = useState("India");
  let [city, setCity] = useState("India");
  let apiKey = "b21a958c2b64dc912d45ef1b579faa46";
  let [des, setDes] = useState("");
  let [temp, setTemp] = useState("");
  let [icon, setIcon] = useState("");
  let [humidity, setHumidity] = useState("");
  let [wind, setWind] = useState("");
  let [pressure, setPressure] = useState("");
  let date = "";
  let month = "";
  let year = "";
  let [fullDate, setFullDate] = useState("");
  let arrDay = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let arrMonth = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "AUgust",
    "September",
    "Octomber",
    "December",
  ];

  function getApi() {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((val) => {
        let d = val.weather && val.weather[0].description;
        setDes(d);
        let t = val.main && val.main.temp;
        setTemp(Math.floor(t - 273.15));
        let h = val.main && val.main.humidity;
        setHumidity(h);
        let w = val.wind && val.wind.speed;
        setWind(Math.floor(w * 3.6));
        let p = val.main && val.main.pressure;
        setPressure(p);
        let i = val.weather && val.weather[0].icon;
        setIcon(i);
        setCity(input);
      });
  }

  useEffect(() => {
    {
      dark
        ? (document.querySelector("html").style.background = "darkslateblue")
        : (document.querySelector("html").style.background = "lightBlue");
    }

    setDay(arrDay[new Date().getDay()]);

    date = new Date().getDate();
    month = new Date().getMonth();
    year = new Date().getFullYear();
    setFullDate(date + "-" + arrMonth[month] + "-" + year);
  }, [dark]);

  let img = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  useEffect(() => {
    getApi();
  }, []);

  return (
    <div>
      <h1 className="text-2xl text-center m-5 font-semibold">Weather App</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          getApi();
        }}
      >
        <div className="relative text-center">
          <div className="fa fa-search absolute pl-4 pt-3"></div>

          <input
            type="text"
            placeholder="Search for location"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
            className="border rounded-full py-2 pl-10 w-1/2"
          />
          <button className="fa-solid fa-location-dot absolute pt-3 mx-4 bg-red-500 text-white py-3 px-4 rounded-xl"></button>
        </div>
      </form>

      <div className="text-center text-lg mt-6">
        {day} , {fullDate}
      </div>
      <div className="bg-white rounded-lg w-1/2 mx-auto my-8 p-5 flex justify-between">
        <div className="ml-5">
          <div className="text-xl text-slate-600">Current weather</div>
          <h1 className="text-2xl font-bold my-3 mx-5">{city.toUpperCase()}</h1>
          <div className="flex flex-row ">
            <img src={img} />
            <div className="text-4xl mt-5">{temp}&#8451;</div>
          </div>

          <div className="my-2 text-xl mx-5 text-gray-600">{des}</div>
        </div>
        <div className="mx-5 mt-12">
          <div className="my-2">
            <i className="fa fa-tint mx-2"></i>
            Humidity <span className="mx-3">{humidity + "%"} </span>
          </div>
          <div className="my-2">
            <i className="fa-solid fa-wind mx-2"></i>
            Wind <span className="mx-9">{wind + "kph"}</span>
          </div>
          <div className="my-2">
            <i className="fa-solid fa-arrow-up-wide-short mx-2"></i>
            Pressure <span className="mx-3">{pressure + "hpa"}</span>
          </div>
        </div>
      </div>

      <div className=" fixed bottom-10 right-28 p-3 rounded-xl">
        <DarkModeSwitch
          checked={dark}
          onChange={() => {
            setDark(!dark);
          }}
        />
      </div>

      <div
        className="fa-brands fa-github text-3xl fixed bottom-11 rounded-xl right-16"
        onClick={() => {
          window.open(
            `https://github.com/meghabenani/Frontend_Projects/tree/master/React%20Projects/15_WeatherApp`,
            "_blank"
          );
        }}
      ></div>
    </div>
  );
}
