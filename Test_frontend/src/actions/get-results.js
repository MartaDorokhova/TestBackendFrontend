import { ACTION_TYPE } from './action-type';

export const getResult = (results) => ({
	type: ACTION_TYPE.GET_RESULTS,
	payload: results,
});
