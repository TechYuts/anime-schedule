import React, { Component } from 'react';
import DayButton from './layout/DayButton';
import { Day } from '../objects/Day';

const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

class DaySelect extends Component<{ onDayClick: (day: Day) => void; selected: Day }, {}> {
  renderButton(day: Day): JSX.Element {
    return (
      <DayButton
        day={day}
        onClick={this.props.onDayClick}
        selected={day === this.props.selected}
        key={day}
      />
    );
  }

  render(): JSX.Element[] {
    return daysOfWeek.map(
      (day: string): JSX.Element => this.renderButton(Day[day as keyof typeof Day]),
    );
  }
}

export default DaySelect;
