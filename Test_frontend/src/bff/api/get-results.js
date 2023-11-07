import { getResult } from '../../actions/get-results';

export const getResults = () => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3008/results`);
		const result = await response.json();
		dispatch(getResult(result));
	} catch (error) {
		console.log(error, 'Ошибка');
	}
};
