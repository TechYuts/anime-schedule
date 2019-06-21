import React, { Component } from 'react';
import CardDetail from './layout/CardDetail';
import { AnimeApiDto } from '../interface/AnimeApiDto';

class AnimeCard extends Component<{ animeInfo: AnimeApiDto[] }> {
  render(): JSX.Element[] {
    return this.props.animeInfo.map(
      (anime): JSX.Element => {
        return (
          <CardDetail
            cover={anime.imageUrl}
            title={anime.title}
            genres={anime.genres}
            synopsis={anime.synopsis}
            id={anime.id}
            key={anime.id}
          />
        );
      },
    );
  }
}

export default AnimeCard;
