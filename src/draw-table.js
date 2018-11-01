import { times } from './times';
import { drawTableRow } from './draw-table-row';

export const drawTable = (persons) => {
	times.forEach(time => {
		drawTableRow(time, persons)
	})

}