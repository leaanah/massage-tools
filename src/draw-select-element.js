export const drawSelectElement = (people) => {
	const selectElement = document.createElement('select');

	people.forEach(person => {
		const selectOption = document.createElement('option');

		selectOption.innerHTML = person.name
		selectElement.append(selectOption);
	});

	document.body.append(selectElement);
}
