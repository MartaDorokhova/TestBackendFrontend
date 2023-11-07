import { currentDate } from '../utils';
import { getResults } from './get-results';

export const addResult = (score) => async (dispatch) => {
	try {
		const response = await fetch('http://localhost:3008/results', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json;charset=utf-8',
			},
			body: JSON.stringify({
				currentDate: currentDate,
				score,
			}),
		});

		if (response) {
			dispatch(getResults());
		}
	} catch (error) {
		console.log(error, 'Ошибка');
	}
};
