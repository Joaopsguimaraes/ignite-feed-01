/* eslint-disable react/react-in-jsx-scope */
import { Header } from './components/Header';
import styles from './styles.module.scss';
import { Sidebar } from './components/Sidebar';
import { Post } from './components/Post';
import './global.scss';

type IPosts = {
  id: number;
  author: {
    avatarUrl: string;
    name: string;
    role: string;
  };
  content: Array<{
    type: string;
    content: string;
  }>;
  publishedAt: Date;
};

const posts: IPosts[] = [
	{
		id: 1,
		author: {
			avatarUrl: 'https://github.com/joaopsguimaraes.png',
			name: 'Joao Guimaraes',
			role: 'Web developer',
		},
		content: [
			{ type: 'paragraph', content: 'Falaaaa Dev!!! 🖖' },
			{
				type: 'paragraph',
				content:
          'Acabei de criar um projeto com orientacoa da rocketseat um todo com reactJs e stitches!!',
			},
			{ type: 'link', content: 'https://github.com/joaopsguimaraes' },
		],
		publishedAt: new Date('2022-06-26 20:30:00'),
	},
];

export function App(): JSX.Element {
	return (
		<>
			<Header />
			<section className={styles.wrapper}>
				<Sidebar />
				<main>
					{posts.map((post: IPosts) => {
						return (
							<Post
								author={post.author}
								content={post.content}
								publishedAt={post.publishedAt}
								key={post.id}
							/>
						);
					})}
				</main>
			</section>
		</>
	);
}
