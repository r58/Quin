import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  button: {
    margin: theme.spacing(1),
  },
}));

function PremiumPage() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom>
            Premium Features
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            Take your writing to the next level with Quillbot's premium features.
          </Typography>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="/images/premium-feature-1.jpg"
              title="Premium Feature 1"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Advanced Rewriting
              </Typography>
              <Typography>
                Get access to Quillbot's advanced rewriting technology, which
                includes additional rewriting options and more accurate
                rewrites.
              </Typography>
            </CardContent>
            <Button
              variant="contained"
              color="primary"
              className={classes.button}
              href="/pricing"
            >
              Learn More
            </Button>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card className={classes.card}>
            <CardMedia
              className={classes.cardMedia}
              image="/images/premium-feature-2.jpg"
              title="Premium Feature 2"
            />
            <CardContent className={classes.cardContent}>
              <Typography gutterBottom variant="h5" component="h2">
                Vocabulary Expansion
              </Typography>
              <Typography>
                Quillbot's vocabulary expansion feature helps you improve your
                writing by suggesting synonyms for commonly used words.
              </Typography>
           
