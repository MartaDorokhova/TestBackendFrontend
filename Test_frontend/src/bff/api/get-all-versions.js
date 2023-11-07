import { getVersions } from '../../actions/get-versions';

export const getAllVersions = () => async (dispatch) => {
	try {
		const response = await fetch(`http://localhost:3008/versions`);
		const versions = await response.json();
		dispatch(getVersions(versions));
	} catch (error) {
		console.log(error, 'Ошибка');
	}
};
