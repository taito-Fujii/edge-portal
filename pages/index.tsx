import Head from 'next/head';
import Container from '@material-ui/core/Container';
import * as React from 'react';
import { LatestNewsAndArticles } from '../components/latestNewsAndArticles';
import { CallToActionCards } from '../components/callToActionCards';
import { ThreeVideoGrid } from '../components/threeVideoGrid';
import { makeStyles } from '@material-ui/core/styles';
import { GetStaticProps } from 'next';
import { Announcement } from '../interfaces/announcements';
import { GetTopAnnouncements } from '../lib/announcements';
import NavBar from '../components/navBar';
import Footer from '../components/footer';
import HeroBanner from '../components/heroBanner';
import { HeroBannerData } from '../interfaces/heroBannerData';
import { Blogpost } from '../interfaces/blogposts';
import { GetLatestBlogposts } from '../lib/blogposts';
import Box from '@material-ui/core/Box';
import StackOverflow from '../components/stackOverflow';
import { YouTubeVideo } from '../interfaces/youTubeVideo';
import { GetYouTubeVideos } from '../lib/youtubeVideos';

const useStyles = makeStyles((theme) => ({
	ctaCards: {
		backgroundColor: theme.palette.common.white,
		paddingTop: 64,
		paddingBottom: 64,
	},
	grey: {
		backgroundColor: theme.palette.grey[100],
		marginTop: '20px',
		marginBottom: '20px',
	},
	white: {
		backgroundColor: theme.palette.common.white,
		paddingTop: '20px',
		paddingBottom: '20px',
	},
}));

export default function Home({
	announcements,
	blogposts,
	heroBannerData,
	youTubeData,
}: {
	announcements: Announcement[];
	heroBannerData: HeroBannerData;
	blogposts: Blogpost[];
	youTubeData: YouTubeVideo[];
}) {
	const classes = useStyles();

	return (
		<>
			<Head>
				<title>
					Content Hub Edge Demo
				</title>
			</Head>

			<NavBar />

			<HeroBanner data={heroBannerData} />

			<Container maxWidth="lg" className={classes.grey}>
				<LatestNewsAndArticles announcements={announcements} blogposts={blogposts} />
			</Container>
			<Footer />
		</>
	);
}

export const getStaticProps: GetStaticProps = async () => {
	const announcements = await GetTopAnnouncements(3);
	const blogposts = await GetLatestBlogposts(4);
	const youTubeVideos: YouTubeVideo[] = await GetYouTubeVideos();

	const heroBannerData: HeroBannerData = {
		Title: 'Sitecore Experience Edge Portal',
		SubTitle: 'Get up and running quickly',
	};
	return {
		props: {
			announcements: announcements,
			heroBannerData: heroBannerData,
			youTubeData: youTubeVideos,
			blogposts: blogposts,
		},
		revalidate: 1,
	};
};
