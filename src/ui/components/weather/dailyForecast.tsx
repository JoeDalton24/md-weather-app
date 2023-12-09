import React from "react";
import styled from "styled-components/native";
import { Daily } from "../../../domain/weather/weather";
import { timestampToDay } from "../../../utils/date";

interface DailyForeCastProps {
  day: Daily;
}

export const DailyForeCast: React.FC<DailyForeCastProps> = ({ day }) => {
  return (
    <DayContainer>
      <DateContainer>
        <WeekDay>{timestampToDay(day.dt)}</WeekDay>
      </DateContainer>
      <IconTempView>
        <WeatherIcon
          source={{
            uri: `http://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`,
          }}
          resizeMode={"contain"} // cover or contain its upto you view look
        />
        <Text>{day.weather[0].description}</Text>
      </IconTempView>
      <DegreeView>
        <Degree>{Math.round(day.temp.max)}°C</Degree>
        <FeelsLike>Feels {Math.round(day.feels_like.day)}°C</FeelsLike>
      </DegreeView>
    </DayContainer>
  );
};

const DayContainer = styled.View`
  padding: 10px;
  background-color: rgba(255, 255, 255, 0.6);
  border-radius: 10px;
  margin: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  width: 95%;
  max-width: 478px;
`;

const Text = styled.Text``;

const DateContainer = styled.View`
  text-align: right;
  flex: 1;
`;

const WeekDay = styled.Text`
  font-size: 24px;
  text-align: center;
  margin: 3px;
`;

const IconTempView = styled.View`
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: left;
  flex: 2;
`;

const WeatherIcon = styled.Image`
  width: 50px;
  height: 50px;
`;

const DegreeView = styled.View`
  text-align: center;
  flex: 1;
`;

const Degree = styled.Text`
  font-size: 24px;
`;

const FeelsLike = styled.Text`
  font-size: 14px;
`;
