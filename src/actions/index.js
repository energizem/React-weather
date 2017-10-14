import axios from "axios";

const API_KEY = "cbba06b8e01f8846c91fb0b40dfcc579";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = "FETCH_WEATHER"

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},eu`;
	const request = axios.get(url);

	return{
		type:FETCH_WEATHER,
		payload: request
	};
}