import { createSelectElement } from './draw-select-element';

export const drawTableRow = (time, persons) => {
	const selectElement = createSelectElement(persons); // kas me juba ei loonud ühte draw-select-element.js failis?
	const tableRow = document.createElement('tr');
	const timeColumn = document.createElement('td');
	const selectColumn = document.createElement('td');
	const tableBody = document.querySelector('tbody');

	timeColumn.innerHTML = time;
	selectColumn.append(selectElement)

	tableRow.append(timeColumn);
	tableRow.append(selectColumn);

	tableBody.append(tableRow);
}
