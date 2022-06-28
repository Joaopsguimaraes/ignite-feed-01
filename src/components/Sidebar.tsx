/* eslint-disable react/react-in-jsx-scope */
import styles from './Sidebar.module.scss';

import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

export function Sidebar(): JSX.Element {
	return (
		<aside className={styles.siderar}>
			<img
				className={styles.cover}
				src="https://images.unsplash.com/photo-1639262498805-17c7dc422d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=90"
			/>
			<div className={styles.profile}>
				<Avatar src="https://github.com/Joaopsguimaraes.png" />
				<strong>Joao Guimaraes</strong>
				<span>Web developer</span>
			</div>
			<footer>
				<a href="#">
					<PencilLine size={20} /> Editar seu perfil
				</a>
			</footer>
		</aside>
	);
}
