/* eslint-disable react/react-in-jsx-scope */
import { Avatar, Cover, Profile, StyledSiderar } from './styled';

import { PencilLine } from 'phosphor-react';

export const Siderbar = () => {
	return(
		<StyledSiderar>
			<Cover src="https://images.unsplash.com/photo-1639262498805-17c7dc422d37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=90" />
			<Profile>
				<Avatar src='https://github.com/Joaopsguimaraes.png' />
				<strong>Joao Guimaraes</strong>
				<span>Web developer</span>
			</Profile>
			<footer>
				<a href="#"><PencilLine size={20} /> Editar seu perfil</a>
			</footer>
		</StyledSiderar>
	);
};