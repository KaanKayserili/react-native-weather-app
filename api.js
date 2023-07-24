import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const API_KEY = 'cee0cc710153d206bdd3a08f3371ac0b';
const CITY_NAME = 'İstanbul';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState(null);

    useEffect(() => {
        fetchWeatherData();
    }, []);

    const fetchWeatherData = async () => {
        try {
            const response = await axios.get(
                `http://api.openweathermap.org/data/2.5/weather?q=${CITY_NAME}&appid=${API_KEY}`
            );
            setWeatherData(response.data);
        } catch (error) {
            console.error('Error fetching weather data:', error);
        }
    };

    return (
        <View>
            {weatherData ? (
                <View>
                    <Text>City: {weatherData.name}</Text>
                    <Text>Temperature: {weatherData.main.temp}</Text>
                    <Text>Description: {weatherData.weather[0].description}</Text>
                </View>
            ) : (
                <Text>Loading...</Text>
            )}
        </View>
    );
};

export default WeatherApp;
