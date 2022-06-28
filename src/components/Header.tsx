/* eslint-disable react/react-in-jsx-scope */
import igniteLogo from '../assets/Ignite-logo.svg';

import styles from './Header.module.scss';

export function Header(): JSX.Element {
	return (
		<header className={styles.header}>
			<img src={igniteLogo} alt="Ignite Logo" />
			<strong>Ignite Feed</strong>
		</header>
	);
}
