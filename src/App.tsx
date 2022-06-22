/* eslint-disable react/react-in-jsx-scope */
import { Header } from './components/Header';
import { GlobalStyles } from './styles/global';
import { Wrapper } from './AppStyles';
import { Siderbar } from './components/Siderbar';
import { Post } from './components/Post';

export const App = () => {
	return (
		<>
			<Header />
			<Wrapper>
				<Siderbar />
				<main>
					<Post />
				</main>
			</Wrapper>
			<GlobalStyles />
		</>
	);
};

