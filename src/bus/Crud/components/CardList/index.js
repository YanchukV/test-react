// Core
import React from 'react';
// Components
import { Card } from '../Card';
// Styles
import Styles from './index.module.scss';
// Hooks
import { useCard } from '../../hooks/useCard';

const CardList = () => {

	const { data } = useCard();

	const cardsJSX = data.map(props => {
		const {id} = props;
		return <Card  key={id} {...props} />;
	});

	return (
		<div className={Styles.root}>
			<div className={Styles.container} >
				{ cardsJSX }
		  </div>
		</div>
	);
};

export default CardList;
