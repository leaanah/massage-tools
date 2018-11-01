export const createSelectElement = (people) => {
	const selectElement = document.createElement('select');

	people.forEach(person => {
		const selectOption = document.createElement('option');

		selectOption.innerHTML = person.name
		selectElement.append(selectOption);
	});

return selectElement;
}
