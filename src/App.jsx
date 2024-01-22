import {
  FluentProvider,
  Caption1,
  Card,
  CardHeader,
  Body1,
  webLightTheme,
  CardFooter,
  Button,
  Select,
  Input,
} from "@fluentui/react-components";
import { ConvertRangeRegular } from "@fluentui/react-icons";
import "./App.css";
import useConverter from "./utils/useConverter";
import {useEffect, useState} from "react";

const options = [
  {
    id: 1,
    label: "Celsius to Fahrenheit",
    value: "ctf",
    symbol: "°C",
    result: "°F",
  },
  {
    id: 2,
    label: "Celsius to Kelvin",
    value: "ctk",
    symbol: "°C",
    result: "°K",
  },
  {
    id: 3,
    label: "Celsius to Reamur",
    value: "ctr",
    symbol: "°C",
    result: "Re",
  },
  {
    id: 4,
    label: "Fahrenheit to Celsius",
    value: "ftc",
    symbol: "°F",
    result: "°C",
  },
  {
    id: 5,
    label: "Fahrenheit to Kelvin",
    value: "ftk",
    symbol: "°F",
    result: "°K",
  },
  {
    id: 6,
    label: "Fahrenheit to Reamur",
    value: "ftr",
    symbol: "°F",
    result: "Re",
  },
  {
    id: 7,
    label: "Kelvin to Celsius",
    value: "ktc",
    symbol: "K",
    result: "°C",
  },
  {
    id: 8,
    label: "Kelvin to Fahrenheit",
    value: "ktf",
    symbol: "K",
    result: "°F",
  },
  {
    id: 9,
    label: "Kelvin to Reamur",
    value: "ktr",
    symbol: "K",
    result: "Re",
  },
  {
    id: 10,
    label: "Reamur to Celsius",
    value: "rtc",
    symbol: "Re",
    result: "°C",
  },
  {
    id: 11,
    label: "Reamur to Fahrenheit",
    value: "rtf",
    symbol: "Re",
    result: "°F",
  },
  {
    id: 12,
    label: "Reamur to Kelvin",
    value: "rtk",
    symbol: "Re",
    result: "K",
  },
];


export default function App() {
  const [temperatureType, setTemperatureType] = useState("ctf");
  const [temperatureInput, setTemperatureInput] = useState(0);
  const [temperature, handleTemperature] = useConverter(temperatureInput, temperatureType);

  useEffect(() => {
    handleTemperature();
  }, [temperatureType, temperatureInput]);
  return (
    <FluentProvider theme={webLightTheme}>
      <Card style={{width: 400}}>
        <CardHeader
          header={
            <Body1>
              <b>{import.meta.env.VITE_WEB_TITLE}</b>
            </Body1>
          }
          description={<Caption1>{import.meta.env.VITE_WEB_DESCRIPTION}</Caption1>}
        />
        <Select onChange={({ target }) => setTemperatureType(target.value)}>
          {options.map((selection, index) => (
            <option key={index} value={selection.value}>
              {selection.label}
            </option>
          ))}
        </Select>
        <Input
          placeholder="input suhu"
          defaultValue={0}
          type="number"
          onChange={(e) => setTemperatureInput(e.target.value)}
        />
        <CardFooter>
          <Button
            icon={<ConvertRangeRegular fontSize={16} />}
            className="btn__convert"
            onClick={handleTemperature}
          >
            Convert
          </Button>
          <Input
            value={`${temperature} ${options.find((option) => option.value === temperatureType).result}`}
            disabled
            className="input__result"
          />
        </CardFooter>
      </Card>
    </FluentProvider>
  );
}
