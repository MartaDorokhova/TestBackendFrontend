const initialTestState = [];

export const testsReducer = (state = initialTestState, action) => {
	switch (action.type) {
		case 'GET_TESTS': {
			const { payload } = action;
			return [...state, ...payload];
		}
		case 'SET_TEST_DATA': {
			return {
				...state,
			};
		}
		case 'RESET_TEST': {
			return [...initialTestState];
		}
		default:
			return state;
	}
};
