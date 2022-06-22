/* eslint-disable react/react-in-jsx-scope */
import { StyledPost, Box, Author, Form } from './styled';

export const Post = () => {
	return (
		<StyledPost>
			<header>
				<Box>
					<img src="https://github.com/joaopsguimaraes.png" />
					<Author>
						<strong>Joao Guimaraes</strong>
						<span>Web developer</span>
					</Author>
				</Box>

				<time title="20 de maio as 20:30" dateTime="2022-05-20 20:30:00">
          Publicado a 1h
				</time>
			</header>
			<div>
				<p>Fala Galera 🖖</p>
				<p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
          obcaecati provident vel rerum enim deserunt tempora iste facere
          perferendis distinctio!
				</p>
				<p>
          👉 <a href="https://github.com/joaopsguimaraes">Portifolio</a>
				</p>
				<p>
					<a href="#">#dev</a> <a href="#">#frontend</a>{' '}
					<a href="#">#javascript</a> <a href="#">#reactJs</a>{' '}
					<a href="#">#nodeJs</a>{' '}
				</p>
			</div>
			<Form>
				<strong>Deixe seu feedback</strong>
				<textarea placeholder="Deixe um comentário" />
				<footer>
					<button type="submit">Publicar</button>
				</footer>
			</Form>
		</StyledPost>
	);
};
