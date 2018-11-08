import { times } from './times';
import { drawTableRow } from './draw-table-row';

export const drawTable = (persons) => {   // kas siin on mingi viis kuidas seda () => funktsiooni pikemalt välja kirjutada?
	times.forEach(time => {
		drawTableRow(time, persons)
	})

}