import React, { Component } from 'react';

interface AnimeCardProperties {
  cover: string;
  title: string;
  genres: string[];
  synopsis: string;
  id: number;
}

export default class Card extends Component<AnimeCardProperties, {}> {
  render(): JSX.Element {
    return <div></div>;
  }
}
