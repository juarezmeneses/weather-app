const KEY = 'c72c2e6bf5434758a79235132221806';

const fetchData = async (city) => {
  const url = `https://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}&aqi=no`;

  const fetchResponse = await fetch(url);
  const data = fetchResponse.json();

  return data;
};

export default fetchData;
