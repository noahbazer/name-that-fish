import React, { Component } from 'react';
import { Images } from '../../assets/Images';
import { GameBoardProps } from '../../types';

interface Fish {
  name: string;
  url: string;
}

const initialFishes: Fish[] = [
  {
    name: 'trout',
    url: Images.trout,
  },
  {
    name: 'salmon',
    url: Images.salmon,
  },
  {
    name: 'tuna',
    url: Images.tuna,
  },
  {
    name: 'shark',
    url: Images.shark,
  },
];

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
    const nextFishToName = initialFishes[this.state.fishIndex];

    this.state.input === nextFishToName.name
      ? this.props.incrementCorrectCount()
      : this.props.incrementIncorrectCount();

    this.props.removeFish(nextFishToName.name);
    this.handleNextFish();
  };

  render() {
    const nextFishToName = initialFishes[this.state.fishIndex];
    return (
      <div id="game-board">
        <div id="fish-container">
          <img
            src={nextFishToName.url}
            alt={nextFishToName.name}
          />
        </div>
        <form
          id="fish-guess-form"
          onSubmit={this.handleSubmit}
        >
          <label htmlFor="fish-guess">
            What kind of fish is .this? (see what I did there?) f
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
