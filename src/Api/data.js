import axios from "axios";

export const getPlacesData = async (type,  ne, sw) => {
  try {
    const URL = `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary`;
    // console.log(URL,"Usewd")
    const { data: { data } } = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng
      },
      headers: {
        'X-RapidAPI-Key': '0a9b94abcdmshb8b526a02be89d5p139530jsna3ad1ce50521',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

    return data;
  } catch (error) {
    console.error(error);
  }
};
