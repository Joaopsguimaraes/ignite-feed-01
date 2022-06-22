/* eslint-disable react/react-in-jsx-scope */
import { Header as HeaderStyled } from './styled';
import igniteLogo from '../../assets/Ignite-logo.svg';

export const Header = () => {
	return(
		<HeaderStyled>
			<img src={igniteLogo} alt="Ignite Logo" />
			<strong>Ignite Feed</strong>
		</HeaderStyled>
	);
};