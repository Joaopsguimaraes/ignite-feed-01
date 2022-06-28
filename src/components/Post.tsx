/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/esm/locale/pt-BR';
import { Avatar } from './Avatar';
import { Comment } from './Comment';

import styles from './Post.module.scss';

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface PostProps {
  author: Author;
  publishedAt: Date;
  content: Array<{
    type: string;
    content: string;
  }>;
}

export function Post({ author, publishedAt, content }: PostProps): JSX.Element {
	const [comment, setComment] = React.useState<string[]>([]);

	const [newCommentText, setNewCommentText] = React.useState('');

	const publishedDateFormated: string = format(
		publishedAt,
		// eslint-disable-next-line quotes
		"d 'de' LLLL 'às' HH:mm'h'",
		{ locale: ptBR }
	);

	const publishedDateRelativeToNow: string = formatDistanceToNow(publishedAt, {
		locale: ptBR,
		addSuffix: true,
	});

	const isNewCommentEmpty: boolean = newCommentText.length === 0;

	function handleNewCommentText(
		event: React.ChangeEvent<HTMLTextAreaElement>
	): void {
		event.target.setCustomValidity('');
		setNewCommentText(event.target.value);
	}

	function handleCreateNewComment(
		event: React.FormEvent<HTMLFormElement>
	): void {
		event.preventDefault();
		setComment([...comment, newCommentText]);
		setNewCommentText('');
	}

	function onDeleteComment(commentToDelete: string): void {
		const commentsWithoutDeleted: string[] = comment.filter(
			(comment: string): boolean => {
				return comment !== commentToDelete;
			}
		);
		setComment(commentsWithoutDeleted);
	}

	function handleChangeNewCommentText(
		event: React.InvalidEvent<HTMLTextAreaElement>
	): void {
		event.target.setCustomValidity(
			'Este campo é obrigatório! Digite um Comentário'
		);
	}

	return (
		<article className={styles.post}>
			<header>
				<div className={styles.box}>
					<Avatar src={author.avatarUrl} />
					<div className={styles.author}>
						<strong>{author.name}</strong>
						<span>{author.role}</span>
					</div>
				</div>

				<time
					title={publishedDateFormated}
					dateTime={publishedAt.toISOString()}
				>
					{publishedDateRelativeToNow}
				</time>
			</header>
			<div>
				{content.map((line: { type: string; content: string }) => {
					if (line.type == 'paragraph') {
						return <p key={line.content}>{line.content}</p>;
					} else if (line.type === 'link') {
						return (
							<p key={line.content}>
								<a href="#">{line.content}</a>
							</p>
						);
					}
				})}
			</div>
			<form onSubmit={handleCreateNewComment} className={styles.form}>
				<strong>Deixe seu feedback</strong>
				<textarea
					placeholder="Deixe um comentário"
					value={newCommentText}
					onChange={handleNewCommentText}
					onInvalid={handleChangeNewCommentText}
					required
				/>
				<footer>
					<button type="submit" disabled={isNewCommentEmpty}>
            Publicar
					</button>
				</footer>
			</form>
			<div className="commentList">
				{comment.map((content: string) => {
					return (
						<Comment
							key={content}
							content={content}
							deleteComment={onDeleteComment}
						/>
					);
				})}
			</div>
		</article>
	);
}
