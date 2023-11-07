import { ACTION_TYPE } from './action-type';

export const getVersions = (versions) => ({
	type: ACTION_TYPE.GET_TESTS,
	payload: versions,
});
