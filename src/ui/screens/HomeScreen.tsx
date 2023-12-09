import { ActivityIndicator, ImageBackground, ScrollView } from "react-native";
import { useServices } from "../../core/serviceContext";
import styled from "styled-components/native";
import { Search } from "../components/search";
import { useState } from "react";
import { useAsync } from "../../utils/hooks";
import { OpenWeather } from "../../domain/weather/weather";
import { CurrentForeCast } from "../components/currentForecast";
import { DailyForeCast } from "../components/dailyForecast";

export const HomeScreen: React.FC = () => {
  const [city, setCity] = useState<string>("Dakar");
  const [weather, setWeather] = useState<OpenWeather>();
  const { weatherService } = useServices();

  const { run, loading } = useAsync(async () => {
    const result = await weatherService.getWeatherByLatAndLon(city);
    setWeather(result);
  }, [city]);

  return (
    <Container>
      <ImageBackground
        source={require("../../../assets/images/bg.png")}
        style={{ width: "100%", height: "100%" }}
      >
        <Search
          value={city}
          onChangeText={setCity}
          onSubmitEditing={() => run()}
        />
        {loading ? (
          <ActivityIndicator size="large" />
        ) : (
          <>
            {weather ? (
              <>
                <CurrentForeCast currentWeather={weather} />
                <ScrollView
                  contentContainerStyle={{ flexGrow: 1 }}
                  style={{ flex: 1 }}
                >
                  <FutureForecastContainer>
                    {weather.daily ? (
                      weather.daily.map((day, index) => {
                        if (index !== 0) {
                          return <DailyForeCast key={day.dt} day={day} />;
                        }
                      })
                    ) : (
                      <NoWeather>No Weather !!</NoWeather>
                    )}
                  </FutureForecastContainer>
                </ScrollView>
              </>
            ) : null}
          </>
        )}
      </ImageBackground>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  background-color: dodgerblue;
`;

const Text = styled.Text`
  color: red;
`;

const NoWeather = styled.Text`
  text-align: center;
  color: white;
`;

const FutureForecastContainer = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
`;
