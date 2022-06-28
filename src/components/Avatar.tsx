/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import styles from './Avatar.module.scss';

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
