import React, { PureComponent } from 'react';

import CardsList from 'components/cards-list';

import MySpeechCard from './my-speech-card';
import data from './data';

import './index.scss';

class MySpeeches extends PureComponent {
  render() {
    const { mySpeeches } = data;

    return (
      <div className="my-speeches">
        <div className="title">My Speeches</div>

        <CardsList>
          {mySpeeches.map((speech) => (
            <MySpeechCard
              key={speech.title}
              mySpeech={speech}
            />
          ))}
        </CardsList>
      </div>
    );
  }
}

export default MySpeeches;
