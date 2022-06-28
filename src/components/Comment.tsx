/* eslint-disable react/react-in-jsx-scope */
import { ThumbsUp, Trash } from 'phosphor-react';
import React from 'react';
import { Avatar } from './Avatar';
import styles from './Comment.module.scss';

interface CommentProps {
  content: string;
  deleteComment: any;
}

export function Comment({ content, deleteComment }: CommentProps): JSX.Element {
	const [likeCount, setLikeCount] = React.useState(0);

	function handleLikeComment(): void {
		setLikeCount((state: number): number => state + 1);
	}

	function handleDeleteComment(): void {
		deleteComment(content);
	}

	return (
		<section className={styles.wrapper}>
			<Avatar hasBorder={false} src="https://github.com/joaopsguimaraes.png" />
			<div className={styles.commentBox}>
				<div className={styles.commentContent}>
					<header className={styles.header}>
						<div className={styles.boxAuthor}>
							<strong>Joao Guimaraes</strong>
							<time title="20 de maio as 20:30" dateTime="2022-05-20 20:30:00">
                Cerca de 1h atrás
							</time>
						</div>
						<button title="Deletar Comentários" onClick={handleDeleteComment}>
							<Trash size={24} />
						</button>
					</header>
					<p>{content}</p>
				</div>
				<footer className={styles.footer}>
					<button onClick={handleLikeComment}>
						<ThumbsUp />
            Aplaudir
						<span>{likeCount}</span>
					</button>
				</footer>
			</div>
		</section>
	);
}
