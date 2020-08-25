// Types
import { types } from './types';

const initialState = {
	data: [],
	isLoading: false,
	error: null,
	isPopupCard: false,
	editCard: [],
};

export const cardReducer = (state = initialState, {payload, type}) => {
	switch (type) {
		case types.CARD_MANAGER_ADD_POPUP_CARD:
			return {
				...state,
				isPopupCard: true
			};
		case types.CARD_MANAGER_CLOSE_POPUP_CARD:
			return {
				...state,
				isPopupCard: false
			};
		case types.CARD_MANAGER_CREATE_CARD_ASYNC:
			return {
				...state,
				data: [...state.data, payload],
        isPopupCard: false
			};
		case types.CARD_MANAGER_EDIT_POPUP_CARD:
			return {
				...state,
				editCard: [...state.data.filter(item => item.id === payload)]
			};
		case types.CARD_MANAGER_UPDATE_CARD_ASYNC:
			return {
				...state,
				data: [payload],
				editCard: []
			};
		case types.CARD_MANAGER_REMOVE_CARD_ASYNC:
			return {
				...state,
				data: [payload],
				editCard: []
			};
		case types.CARD_MANAGER_START_FETCHING:
			return {
				...state,
				isLoading: true,
			};
		case types.CARD_MANAGER_STOP_FETCHING:
			return {
				...state,
				isLoading: false,
			};
      case types.CARD_MANAGER_FILL_CARDS:
			return {
				...state,
        data: payload
			};
		default:
			return state;
	}
};
