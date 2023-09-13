// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

import { CarProps, FilterProps } from "../_types";

export const getCars = async (filters: FilterProps) => {
  const { manufacturer, year, fuel, limit, model } = filters;

  const headers = {
    'X-RapidAPI-Key': '48936a9c0bmsh65f869e7cdfc426p19142ejsna9053546162f',
    'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
  }

  try {
    const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
      headers: headers
    });

    const result = await response.json() as [];

    return [result, null];
  } catch (error) {
    return [null, error];
  }
}

export const generateCarImageUrl = (car: CarProps, angle?: number) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'hrjavascript-mastery' || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 