import React, { PureComponent } from 'react';

import './index.scss';

const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

function getMonthName(monthIndexIso) {
  return monthNames[monthIndexIso - 1];
}

class SpeechCard extends PureComponent {
  lastLectureYearSelector = ({ lastLectureDate }) => lastLectureDate.split('-')[0];
  lastLectureMonthSelector = ({ lastLectureDate }) => getMonthName(Number(lastLectureDate.split('-')[1]));

  render() {
    const { speech } = this.props;

    return (
      <div className="speech-card">
        <div className="heading">
          <div className="last-lecture-date">
            {this.lastLectureMonthSelector(speech)}<br />
            {this.lastLectureYearSelector(speech)}
          </div>

          <img
            className="image"
            src={speech.headingImageUrl}
            alt=""
          />
        </div>

        <div className="body">
          <div className="title">
            {speech.title}
          </div>

          <div className="category">
            {speech.category}
          </div>

          <div className="description">
            {speech.description}
          </div>

          <div className="links">
            <span className="label">
              Links
            </span>

            {speech.links.map((link) => (
              <a
                key={link.title}
                className="link"
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default SpeechCard;
