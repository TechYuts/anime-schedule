import React, { Component } from 'react';
import './App.css';
import DaySelect from './components/DaySelect';
import { Day } from './objects/Day';

interface AppState {
  view: string;
  animeInfo: string[];
  animeByDay: {
    sunday: string[];
    monday: string[];
    tuesday: string[];
    wednesday: string[];
    thursday: string[];
    friday: string[];
    saturday: string[];
  };
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
      animeByDay: {
        sunday: [],
        monday: [],
        tuesday: [],
        wednesday: [],
        thursday: [],
        friday: [],
        saturday: [],
      },
      selectedDay: Day.Monday,
      returned: [],
      curGenre: 'Action',
      searchValue: '',
      tagline: '',
    };
  }

  setDay = (day: Day): void => this.setState({ selectedDay: day, view: 'scheduleView' });

  render(): JSX.Element {
    return (
      <header className={'nav'}>
        <div className={'wrap'}>
          <h1 id={'pageTitle'}>Anime Calendar</h1>
          <DaySelect selected={this.state.selectedDay} onDayClick={this.setDay} />
        </div>
      </header>
    );
  }
}

export default App;
