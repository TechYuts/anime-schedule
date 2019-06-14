import React, { Component } from 'react';
import { Day } from '../../objects/Day';

class DayButton extends Component<
  { onClick: (day: Day) => void; day: Day; selected: boolean },
  {}
> {
  render(): JSX.Element {
    const onClickEvent = (): void => this.props.onClick(this.props.day);

    return (
      <button
        className={'selector' + (this.props.selected ? ' selected' : '')}
        onClick={onClickEvent}
      >
        <div className={'selectorLabel'}>{this.props.day}</div>
      </button>
    );
  }
}

export default DayButton;
