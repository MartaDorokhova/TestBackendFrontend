import { getTests } from '../../actions/get-tests';

export const getAllTests = () => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3008/tests`);
		const tests = await response.json();
		console.log(tests);
		dispatch(getTests(tests));
	} catch (error) {
		console.log(error, 'Ошибка');
	}
};
