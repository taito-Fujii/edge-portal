import HeroBanner from "components/heroBanner";
import NavBar from "components/navBar";
import { HeroBannerData } from "interfaces/heroBannerData";
import Head from "next/head";
import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import { GetLatestBlogposts } from "lib/blogposts";
import { GetStaticProps } from "next";
import { Blogpost } from "interfaces/blogposts";

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },
    avatar: {
        backgroundColor: theme.palette.primary.main,
    },
    header: {
        borderBottom: "1px solid" + theme.palette.grey[300],
    },
    card: {
        minWidth: "75%",
        maxWidth: "75%",
        marginTop: "2rem"
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
}));

export default function Blogs({ blogposts }: { blogposts: Blogpost[]; }) {
    const classes = useStyles();

    const heroBannerData: HeroBannerData = {
        Title: "Blog",
        SubTitle: "Find the latest blogs here!",
    };

    console.log(blogposts);

    return (
        <div>
            <Head>
                <title>Blog</title>
            </Head>

            <NavBar />

            <HeroBanner data={heroBannerData} />

            <div className={classes.root}>
                {blogposts.map(({ Title, Abstract, PublishDate }) => (
                    <Card className={classes.card} variant="outlined">
                        <CardHeader
                            title={Title}
                            className={classes.header}
                        />
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                            {PublishDate}
                        </Typography>
                            <Typography variant="body2" component="h2">
                            {Abstract}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Read full post</Button>
                        </CardActions>
                    </Card>
                ))}
            </div>

        </div>


    )
}


export const getStaticProps: GetStaticProps = async () => {
    const blogposts = await GetLatestBlogposts(4);

    return {
        props: {
            blogposts: blogposts,
        },
    };
};