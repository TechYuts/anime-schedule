import React, { Component } from 'react';
import './App.css';
import DaySelect from './components/DaySelect';
import { Day } from './objects/Day';
import AnimeCard from './components/AnimeCard';
import { AnimeApiDto } from './interface/AnimeApiDto';

interface AppState {
  view: string;
  animeInfo: AnimeApiDto[];
  selectedDay: Day;
  returned: string[];
  curGenre: string;
  searchValue: string;
  tagline: string;
}

class App extends Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      view: 'scheduleView',
      animeInfo: [],
      selectedDay: Day.Monday,
      returned: [],
      curGenre: 'Action',
      searchValue: '',
      tagline: '',
    };
  }

  componentDidMount(): void {
    fetch('https://api.jikan.moe/v3/schedule')
      .then((results): Promise<any> => results.json())
      .then((data): void => {
        const tmp: any[] = [];

        Object.values(Day).forEach((day: Day): void => {
          data[day.toLowerCase()].forEach((series: any): void => {
            const obj: AnimeApiDto = {
              day: day,
              genres: series.genres.map((genre: any): string => genre.name),
              imageUrl: series.image_url,
              id: series.mal_id,
              synopsis: series.synopsis,
              title: series.title,
            };
            tmp.push(obj);
          });
        });
        this.setState({ animeInfo: tmp });
        console.log(this.state.animeInfo);
      });
  }

  setDay = (day: Day): void => this.setState({ selectedDay: day, view: 'scheduleView' });

  render(): JSX.Element {
    return (
      <header className={'nav'}>
        <div className={'wrap'}>
          <h1 id={'pageTitle'}>Anime Calendar</h1>
          <DaySelect selected={this.state.selectedDay} onDayClick={this.setDay} />
        </div>
        <AnimeCard animeInfo={this.state.animeInfo} daySelected={this.state.selectedDay} />
      </header>
    );
  }
}

export default App;
