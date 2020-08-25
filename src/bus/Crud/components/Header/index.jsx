import React from 'react';
// Styles
import Styles from './index.module.scss';
// img
import Logo from '../../assets/logo-little.png';
// Hooks
import { useCard } from '../../hooks/useCard';

const Header = () => {

	const { addPopupCard } = useCard();

	return (
		<header className={Styles.root}>
			<div className={Styles.container}>

				<a href='#site' rel='noopener norefferer' className={Styles.logo}>
					<img src={Logo}  className={Styles.logoImg} alt='logo' />
					<div className={Styles.logoTitle}>
						<span>CRUD</span>
					</div>
				</a>

				<div className={Styles.menu}>
						<button className={Styles.btn} onClick={addPopupCard} type='button'>Add Hot dog</button>
				</div>
			</div>
		</header>
	);
};

export default Header;
