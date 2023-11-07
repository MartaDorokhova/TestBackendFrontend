import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { testResultsReducer, testsReducer, versionsReducer } from './reducers';

const reducer = combineReducers({
	results: testResultsReducer,
	tests: testsReducer,
	versions: versionsReducer,
});
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
	reducer,
	composeEnhancers(applyMiddleware(thunk)),
);
