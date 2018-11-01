import { addPerson } from './add-person';

export const enhanceButtons = () => {
	const openModalButton = document.querySelector('#openModalButton');
	const dialog = document.querySelector('dialog');

	openModalButton.onclick = () => dialog.showModal();

	addPersonButton.onclick = () => {
		const personName = document.querySelector('input').value;
		addPerson(personName);
		dialog.close();
	}
}