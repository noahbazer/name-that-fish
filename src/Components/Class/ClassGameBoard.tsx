import React, { Component } from 'react';
import { GameBoardProps } from '../../types';

interface State {
  input: string;
  fishIndex: number;
}

export class ClassGameBoard extends Component<GameBoardProps, State> {
  constructor(props: GameBoardProps) {
    super(props);
    this.state = {
      input: '',
      fishIndex: 0,
    };
  }

  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
  };

  handleNextFish = () => {
    this.setState({ fishIndex: this.state.fishIndex + 1, input: '' });
  };

  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    this.state.input === this.props.currentFishData.name
      ? this.props.incrementCorrectCount()
      : this.props.incrementIncorrectCount();
    this.handleNextFish();
  };

  render() {
    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={this.props.currentFishData.url}
            alt={this.props.currentFishData.name}
          />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="fish-guess">
            What kind of fish is .this? (see what I did there?)
          </label>
          <input
            type="text"
            name="fish-guess"
            value={this.state.input}
            onChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
