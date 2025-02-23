import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import { HeroBannerData } from 'interfaces/heroBannerData';
import { blueGrey } from '@material-ui/core/colors';

const useStyles = makeStyles(() => ({
	title: {
		textAlign: 'center',
		color: 'white',
	},
	box: {
		backgroundColor: '#424242',
		backgroundImage: 'url(https://edge-microsite-400.stylelabs.io/api/public/content/7837d76bb0354f05a2fc2c27cc2631a5?v=08ecbd49&t=w2560h280)',
		padding: '2rem',
		borderRadius: '0',
		marginTop: 0,
		marginBottom: 0,
	},
}));

export default function HeroBanner({ data }: { data: HeroBannerData }) {
	const classes = useStyles();

	return (
		<Box my={2} className={classes.box}>
			<Typography className={classes.title} variant="h4" component="h1" gutterBottom>
				{data.Title}
			</Typography>
		</Box>
	);
}
