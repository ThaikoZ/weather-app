import axios from "axios";

export const apiKey = `?key=${import.meta.env.VITE_WEATHER_API_KEY}`;

export const axiosInstance = axios.create({
  baseURL:
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timelinemulti",
});
