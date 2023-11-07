import { ACTION_TYPE } from './action-type';

export const setResult = (result) => ({
	type: ACTION_TYPE.SET_RESULT,
	payload: result,
});
