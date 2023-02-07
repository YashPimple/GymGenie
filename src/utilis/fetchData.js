

export const exerciseOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.REACT_RAPID_API_KEY,
    'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
  },
};



export const fetchData = async (url, options) =>{
  const response = await fetch(url);
  const data = await response.json();

  return data
};
