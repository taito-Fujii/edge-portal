import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) => ({
	appBar: {
		backgroundColor: 'white',
		margin: '0px',
	},
	navBarLink: {
		padding: '15px',
		fontSize: '16px',
		fontWeight: 600,
		color: '#000000',
		'&:hover': {
			color: '#9e9e9e',
		},
	},
	gridItem: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'column',
		[theme.breakpoints.up('sm')]: {
			flexDirection: 'row',
		},
		[theme.breakpoints.up('md')]: {
			justifyContent: 'flex-end',
		},
	},
	navLogo: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		[theme.breakpoints.up('sm')]: {},
	},
	link: {
		textDecoration: 'none',
	},
	navBar: {
		backgroundColor: '#fff',
	},
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.navBar}>
			<Container maxWidth="lg">
				<Grid container justify="center" spacing={1} className={classes.appBar}>
					<Grid item md={2} xs={12} className={classes.navLogo}>
						<Link href="/">
							<a>
								<Image src="/images/sitecore_logo.svg" width={200} height={100} />
							</a>
						</Link>
					</Grid>
					<Grid item sm={10} xs={10} className={classes.gridItem}>
						<Link href="/blogs">
							<a className={classes.link}>
								<Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
									Blog
								</Typography>
							</a>
						</Link>
						<Link href="/playground">
							<a className={classes.link}>
								<Typography className={classes.navBarLink} variant="h6" component="h1" gutterBottom>
								playground
								</Typography>
							</a>
						</Link>

					</Grid>
				</Grid>
			</Container>
		</div>
	);
}
