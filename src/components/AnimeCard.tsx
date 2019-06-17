import React, { Component } from 'react';
import { Day } from '../objects/Day';
import Card from './layout/Card';

interface ApiObject {
  mal_id: number;
  title: string;
  image_url: string;
  genres: string[];
  synopsis: string;
}

class AnimeCard extends Component<{ day: Day }, { animeInfo: ApiObject[] }> {
  updateDetails = (): void => {
    fetch(`https://api.jikan.moe/v3/schedule/${this.props.day}`)
      .then(results => results.json())
      .then(data => {
        this.setState({ animeInfo: data[this.props.day.toLowerCase()] });
        console.log(this.state.animeInfo);
      });
  };

  componentDidUpdate(prevProps: { day: Day }): void {
    if (this.props.day !== prevProps.day) this.updateDetails();
  }

  render(): JSX.Element[] {
    return this.state.animeInfo.map(anime => {
      return (
        <Card
          cover={anime.image_url}
          title={anime.title}
          genres={anime.genres}
          synopsis={anime.synopsis}
          id={anime.mal_id}
        />
      );
    });
  }
}

export default AnimeCard;
