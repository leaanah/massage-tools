import { fetchPeople } from './fetch-people';
import { drawTable } from './draw-table';
import { enhanceButtons } from './enhance-buttons';


enhanceButtons();
fetchPeople(drawTable);