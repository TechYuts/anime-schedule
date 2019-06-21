import React from 'react';
import Card from '@material-ui/core/Card';
import { Theme, StyleRules, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import { AnimeApiDto } from '../../interface/AnimeApiDto';
import { CardContent } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import CardMedia from '@material-ui/core/CardMedia';

const styles = (theme: Theme): StyleRules =>
  createStyles({
    card: {
      display: 'inline-flex',
      margin: 10,
      transition: 'box-shadow .6s ease',
    },
    title: {
      fontSize: 15,
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
      height: 60,
      width: 160,
    },
    cover: {
      width: 160,
      height: 224,
      objectFit: 'cover',
      opacity: 0,
      transition: 'opacity .3s',
    },
    genres: {
      display: 'flex',
      alignItems: 'center',
      paddingLeft: theme.spacing(1),
      paddingBottom: theme.spacing(1),
    },
    root: {
      display: 'flex',
      justifyContent: 'center',
      flexWrap: 'wrap',
    },
    chip: {
      margin: 1,
      fontSize: 10,
    },
  });

interface Props extends WithStyles<typeof styles> {
  anime: AnimeApiDto;
}

const CardDetail = (props: Props): JSX.Element => {
  const { classes, anime } = props;
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.title}>{anime.title}</Typography>
          <div className={classes.root}>
            {anime.genres.map(genre => {
              return <Chip size="small" label={genre} key={genre} className={classes.chip} />;
            })}
          </div>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cover}
        image={anime.imageUrl}
        title={anime.title + 'cover image'}
      />
    </Card>
  );
};

export default withStyles(styles)(CardDetail);
