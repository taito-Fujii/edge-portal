import Typography from '@material-ui/core/Typography';
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import { Grid } from '@material-ui/core';
import { Box } from '@material-ui/core';
import { FooterLink } from './footerLink';

export const useStyles = makeStyles(() => ({
	title: {
		color: 'white',
		paddingBottom: '10px',
		paddingLeft: '.5rem',
	},
	box: {
		backgroundColor: '#424242',
		padding: '5rem',
		borderRadius: '1rem',
		marginTop: '0px',
	},
	footer: {
		backgroundColor: 'gray',
		padding: '2rem',
	},
	footerLinkText: {
		color: 'pink',
		paddingBottom: '.5rem',
		paddingRight: '.5rem',
		paddingLeft: '.5rem',
	},
	footerLink: {
		textDecoration: 'none',
		'&:hover': {
			textDecoration: 'underline',
			textDecorationColor: 'white',
		},
	},
	copyright: {
		color: 'white',
		paddingTop: '5rem',
		display: 'flex',
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div>

		</div>
	);
}
