const API_TOKEN = '9a83d9f0192ca0b5c3a1385b82cea6b17a7cc505';
const DOMAIN = 'https://professional-grill.pipedrive.com';

export const fetchPeople = (callback) => {
	fetch(`${DOMAIN}/v1/persons?start=0&api_token=${API_TOKEN}`)
		.then((response) => response.json())
		.then((jsonResponse) => callback(jsonResponse.data))
}