import { fetchPeople } from './fetch-people';

function drawPeople(people) {
	people.forEach(person => {
		const listElement = document.createElement('li');
		listElement.innerHTML = person.name
		document.body.append(listElement);
	});
}

fetchPeople(drawPeople);