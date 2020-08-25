// Core
import { combineReducers } from 'redux';

// Reducers
import { cardReducer as card } from '../bus/Crud/reducer';

export const rootReducer = combineReducers({
	card,
});
