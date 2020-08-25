// Config
import { root } from './config';

const addToLocalStorage = (payload) => {
	const oldData = localStorage.getItem(root);
	if (oldData) {
		localStorage.setItem(root, JSON.stringify([...JSON.parse(oldData), payload]));
		return localStorage.getItem(root);
	} 
		localStorage.setItem(root, JSON.stringify([payload]));
		return localStorage.getItem(root);
	
};

const updateLocalStorage = (payload) => {
	const oldData = localStorage.getItem(root);
	const data = [...JSON.parse(oldData)].map(item => item.id === payload.id ? payload : item);
  localStorage.setItem(root, JSON.stringify([...data]));
	return localStorage.getItem(root);
};

const removeLocalStorage = (payload) => {
	const oldData = localStorage.getItem(root);
	const data = [...JSON.parse(oldData)].filter(item => item.id !== payload.id);
	localStorage.setItem(root, JSON.stringify([...data]));
	return localStorage.getItem(root);
};

export const api = Object.freeze({
	todo: {
		fetch: () => localStorage.getItem(root),
		create: payload => addToLocalStorage(payload),
		update: payload => updateLocalStorage(payload),
		remove: payload => removeLocalStorage(payload),
	},
});
