import { ACTION_TYPE } from './action-type';

export const getTests = (tests) => ({
	type: ACTION_TYPE.GET_TESTS,
	payload: tests,
});
