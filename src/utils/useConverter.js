import { useState } from "react";
const FIXED_CALC = 32;

export default function useConverter(temperatureInput, temperatureType) {
    const [temperature, setTemperature] = useState(0);

    const input = parseFloat(temperatureInput);
    const handleTemperature = () => {
        const fahrenheitToCelsius = (fahrenheit) => {
            return (fahrenheit - 32) * (5/9);
        };

        const fahrenheitToKelvin = (fahrenheit) => {
            return (fahrenheit - 32) * (5/9) + 273.15;
        };

        const fahrenheitToReamur = (fahrenheit) => {
            return (fahrenheit - 32) * (4/9);
        };

        const celsiusToFahrenheit = (celsius) => {
            return (celsius * 9/5) + 32;
        };

        const celsiusToKelvin = (celsius) => {
            return celsius + 273.15;
        };

        const celsiusToReamur = (celsius) => {
            return celsius * (4/5);
        };

        const kelvinToCelsius = (kelvin) => {
            return kelvin - 273.15;
        };

        const kelvinToFahrenheit = (kelvin) => {
            return (kelvin - 273.15) * 9/5 + 32;
        };

        const kelvinToReamur = (kelvin) => {
            return (kelvin - 273.15) * (4/5);
        };

        const reamurToCelsius = (reamur) => {
            return reamur * (5/4);
        };

        const reamurToFahrenheit = (reamur) => {
            return reamur * (9/4) + 32;
        };

        const reamurToKelvin = (reamur) => {
            return reamur * (5/4) + 273.15;
        };



        if (temperatureType === "ctf") {
            // Celsius to Fahrenheit
            setTemperature(celsiusToFahrenheit(input))
        } else if (temperatureType === "ctk") {
            // Celsius to Kelvin
            setTemperature(celsiusToKelvin(input))
        } else if (temperatureType === "ctr") {
            // Celsius to Reamur
            setTemperature(celsiusToReamur(input))
        } else if (temperatureType === "ftc") {
            // Fahrenheit to Celsius
            setTemperature(fahrenheitToCelsius(input))
        } else if (temperatureType === "ftk") {
            // Fahrenheit to Kelvin
            setTemperature(fahrenheitToKelvin(input))
        } else if (temperatureType === "ftr") {
            // Fahrenheit to Reamur
            setTemperature(fahrenheitToReamur(input))
        } else if (temperatureType === "ktc") {
            // Kelvin to Celsius
            setTemperature(kelvinToCelsius(input))
        } else if (temperatureType === "ktf") {
            // Kelvin to Fahrenheit
            setTemperature(kelvinToFahrenheit(input))
        } else if (temperatureType === "ktr") {
            // Kelvin to Reamur
            setTemperature(kelvinToReamur(input))
        } else if (temperatureType === "rtc") {
            // Reamur to Celsius
            setTemperature(reamurToCelsius(input))
        } else if (temperatureType === "rtf") {
            // Reamur to Fahrenheit
            setTemperature(reamurToFahrenheit(input))
        } else if (temperatureType === "rtk") {
            // Reamur to Kelvin
            setTemperature(reamurToKelvin(input))
        } else {
            console.log("Jenis konversi suhu tidak valid.");
            return;
        }
    };
    
    return [temperature, handleTemperature];
}
