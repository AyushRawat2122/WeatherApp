import axios from "axios";
const key = String(import.meta.env.VITE_API_KEY);
const fetchCurrentData = async (country) =>{
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${country}&aqi=no`);
        return response.data;
    } catch (error) {  
        throw error;     
    }
}
const fetchDayforecast = async (country) =>{
    try{
        const response = await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${country}&days=1&aqi=no`);
        return response.data?.forecast?.forecastday[0]?.hour;
    }catch (error){
        throw error;
    }
}
const fetchAstroToday = async (country) =>{
    try{
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); 
        const day = String(today.getDate()).padStart(2, '0');

        const formattedDate = `${year}-${month}-${day}`;
        const response = await axios.get(`https://api.weatherapi.com/v1/astronomy.json?key=${key}&q=${country}&dt=${formattedDate}`);
        return response.data;
    }catch (error){
        throw error;
    }
}

const fetchoptions = async (country) =>{
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/search.json?key=${key}&q=${country}`)
        return response.data;
    } catch (error) {
       throw error;
    }
}

const SportsEvent = async (country) =>{
    try {
        const response = await axios.get(`https://api.weatherapi.com/v1/sports.json?key=${key}&q=${country}`)
        return response.data;
    } catch (error) {
        console.log(error);
        throw error;
    }
}
export {fetchCurrentData , fetchDayforecast , fetchAstroToday , fetchoptions , SportsEvent}