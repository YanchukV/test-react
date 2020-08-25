// Core
import React from "react";
import { Provider } from 'react-redux';
// Components
import { Crud } from "./bus/Crud";
// Other
import { store } from './init/store';

export default function App() {
  return (
		<Provider store={store}>
			<Crud />
		</Provider>
  );
}
