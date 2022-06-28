## Criando Ignite Feed com Rocketseat

*Projeto no Figma:*

https://www.figma.com/community/file/1113573231685349036

### Neste projeto vimos os seguintes conceitos básicos de React:
[x] *React Components*

```js
import React from 'react';

export function App(){
  return <h1>Hello Word!</h1>
}
```

[x] *React Props*

```js
import React from 'react';

interface AvatarProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean;
}

export function Avatar({
	hasBorder = true,
	...props
}: AvatarProps): JSX.Element {
	return (
		<img
			{...props}
			className={hasBorder ? styles.avatarWithBorder : styles.avatar}
		/>
	);
}
```

[x] *React States*

```js
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
``` 

[x] *React With Typescript*

```ts
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
``` 

#### Conceitos fundamentais do react que serão usados em varias aplicações independe do projeto essa e a base que precisa para começar com o React.

*Com este Projeto temos ótimos exemplos de map no React, para intermar sobre um array, assim como find para identificar um valor no array para tomar alguma ação*


