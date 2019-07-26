import React, { PureComponent } from 'react';

import SpeechCard from 'components/speech-card';

class MySpeeches extends PureComponent {
  constructor() {
    super();

    this.speechSelector = (speech) => ({
      title: speech.title,
      headingImageUrl: speech.headingImageUrl,
      category: speech.category,
      description: speech.description,
      links: speech.links,
      lastLectureDate: speech.lectures[speech.lectures.length - 1].date,
    });
  }

  render() {
    const { mySpeech } = this.props;
    const speech = this.speechSelector(mySpeech);

    return (
      <SpeechCard speech={speech} />
    );
  }
}

export default MySpeeches;
