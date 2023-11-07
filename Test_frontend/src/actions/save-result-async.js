import { request } from '../utils/request';
import { setResult } from './set-result';

export const saveResultAsync = (newResultData) => async (dispatch) => {
	const saveRequest = request(`/results`, 'POST', newResultData);

	return saveRequest.then((newResult) => {
		dispatch(setResult(newResult.data));

		return newResult.data;
	});
};
