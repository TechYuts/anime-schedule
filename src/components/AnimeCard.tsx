import React, { Component } from 'react';
import CardDetail from './layout/CardDetail';
import { AnimeApiDto } from '../interface/AnimeApiDto';
import { Day } from '../objects/Day';

class AnimeCard extends Component<{ animeInfo: AnimeApiDto[]; daySelected: Day }> {
  render(): JSX.Element[] {
    return this.props.animeInfo
      .filter((anime: AnimeApiDto): boolean => anime.day === this.props.daySelected)
      .map(
        (anime: AnimeApiDto): JSX.Element => {
          return <CardDetail anime={anime} key={anime.id} />;
        },
      );
  }
}

export default AnimeCard;
