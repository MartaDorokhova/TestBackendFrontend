import { request } from '../utils/request';
import { setTestData } from './set-test-data';

export const saveTestAsync = (id, newTestData) => (dispatch) => {
	const saveRequest = id
		? request(`/tests/${id}`, 'PATCH', newTestData)
		: request(`/tests`, 'POST', newTestData);

	return saveRequest.then((updatedTest) => {
		dispatch(setTestData(updatedTest.data));

		return updatedTest.data;
	});
};
