import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './index.module.scss'

export type TypographyProps = {
	children: PropTypes.ReactNodeLike
	variant:
		| 'h1'
		| 'h2'
		| 'smallBody'
		| 'regularBody'
		| 'mediumBody'
		| 'largeBody'
		| 'footer'
		| 'superscript'
		| 'title'
		| 'largeTitle'
		| 'extraLargeTitle'
	weight: 'regular' | 'medium' | 'semiBold' | 'bold' | 'extraBold'
	color: 'black' | 'gray' | 'white' | 'green'
	colorImmutable?: boolean
	tag?: string
	muted?: boolean
} & React.DetailedHTMLProps<React.HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>

const Typography = ({ children, variant, weight, color, colorImmutable, tag, muted, ...props }: TypographyProps) => {
	const className = classNames(
		styles.root,
		styles[variant],
		styles[color],
		styles[weight],
		{ [styles.muted]: muted },
		{ [styles.colorImmutable]: colorImmutable },
		props.className
	)
	const componentType = ['h1', 'h2'].includes(variant) ? variant : 'p'

	return React.createElement(tag || componentType, { ...props, className }, children)
}

Typography.defaultProps = {
	variant: 'p',
	weight: 'regular',
	color: 'black',
	colorImmutable: false,
}

export { Typography }
