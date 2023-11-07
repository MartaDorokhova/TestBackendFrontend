const initialTestResultsState = [];

export const testResultsReducer = (state = initialTestResultsState, action) => {
	switch (action.type) {
		case 'GET_RESULTS': {
			const { payload } = action;
			return [...state, ...payload];
		}
		case 'RESET_TEST': {
			return [];
		}
		case 'SET_RESULT':
			return {
				...state,
			};
		default:
			return state;
	}
};
