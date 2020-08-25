// Types
import { types } from './types';

// Api
import { api } from '../../api';

export const cardActions = Object.freeze({
	// Sync
	addPopupCard: () => {
		return {
			type: types.CARD_MANAGER_ADD_POPUP_CARD,
		};
	},
	closePopupCard: () => {
		return {
			type: types.CARD_MANAGER_CLOSE_POPUP_CARD,
		};
	},
	editPopupCard: (id) => {
		return {
			type: types.CARD_MANAGER_EDIT_POPUP_CARD,
			payload: id,
		};
	},
	startFetching: () => {
		return {
			type: types.CARD_MANAGER_START_FETCHING,
		};
	},
	stopFetching: () => {
		return {
			type: types.CARD_MANAGER_STOP_FETCHING,
		};
	},
	setFetchingError: (error) => {
		return {
			type: types.CARD_MANAGER_SET_FETCHING_ERROR,
			error: true,
			payload: error,
		};
	},
	fillCards: (payload) => {
		return {
			type: types.CARD_MANAGER_FILL_CARDS,
			payload,
		};
	},
	// Async
	fetchCardsAsync: () => (dispatch) => {

		dispatch({
			type: types.CARD_MANAGER_FETCH_CARDS_ASYNC,
		});

		dispatch(cardActions.startFetching());

		const response = api.todo.fetch();

		if (response) {
			dispatch(cardActions.fillCards(JSON.parse(response)));
		}

		dispatch(cardActions.stopFetching());
	},
	removeCardAsync: (payload) => (dispatch) => {

		dispatch({
			type: types.CARD_MANAGER_REMOVE_CARD_ASYNC,
			payload,
		});

		dispatch(cardActions.startFetching());

		const response = api.todo.remove(payload);

		if (response) {
			dispatch(cardActions.fillCards(JSON.parse(response)));
		}

		dispatch(cardActions.stopFetching());
	},
	createCardAsync: (payload) => (dispatch) => {

		dispatch({
			type: types.CARD_MANAGER_CREATE_CARD_ASYNC,
			payload,
		});

		dispatch(cardActions.startFetching());

		const response = api.todo.create(payload);
		if (response) {
			dispatch(cardActions.fetchCardsAsync());
		}

		dispatch(cardActions.stopFetching());
	},
	updateCardAsync: (payload) => (dispatch) => {

		dispatch({
			type: types.CARD_MANAGER_UPDATE_CARD_ASYNC,
			payload,
		});

		dispatch(cardActions.startFetching());

		const response = api.todo.update(payload);

		if (response) {

			dispatch(cardActions.fetchCardsAsync());
		}

		dispatch(cardActions.stopFetching());
	},
});
