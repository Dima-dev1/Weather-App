const GEO_URL = "https://geocoding-api.open-meteo.com/v1/search";
const WEATHER_URL = "https://api.open-meteo.com/v1/forecast";

// 1. Convert city → coordinates
export async function getCoordinates(city) {
  const res = await fetch(`${GEO_URL}?name=${city}&count=1`);
  const data = await res.json();

  if (!data.results) return null;

  return {
    name: data.results[0].name,
    country: data.results[0].country,
    latitude: data.results[0].latitude,
    longitude: data.results[0].longitude,
  };
}

// 2. Get weather from coordinates
export async function getWeather(lat, lon) {
  const res = await fetch(
    `${WEATHER_URL}?latitude=${lat}&longitude=${lon}` +
      `&current_weather=true` +
      `&hourly=temperature_2m,weathercode` +
      `&daily=temperature_2m_max,temperature_2m_min,weathercode` +
      `&timezone=auto`,
  );

  return await res.json();
}
