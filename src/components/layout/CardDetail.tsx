import React from 'react';
import Card from '@material-ui/core/Card';
import { makeStyles, Theme } from '@material-ui/core/styles';

interface AnimeCardProperties {
  cover: string;
  title: string;
  genres: string[];
  synopsis: string;
  id: number;
}

const styles = (theme: Theme): object => ({
  card: {
    display: 'flex',
    margin: 10,
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

export default function CardDetail(props: AnimeCardProperties): JSX.Element {
  const classes = makeStyles(styles);
  console.log(props);
  return <Card> </Card>;
}
