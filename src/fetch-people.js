import { API_TOKEN, DOMAIN } from './constants';

export const fetchPeople = (callback) => {
	fetch(`${DOMAIN}/v1/persons?start=0&api_token=${API_TOKEN}`)
		.then((response) => response.json())
		.then((jsonResponse) => callback(jsonResponse.data))
}