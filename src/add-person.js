import { API_TOKEN, DOMAIN } from './constants';

export const addPerson = (name) => {
	const url = `${DOMAIN}/v1/persons?api_token=${API_TOKEN}`;
	const requestOptions = {
		method: 'POST',
		body: `name=${name}`,
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	fetch(url, requestOptions)
};