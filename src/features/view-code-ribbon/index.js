import React from 'react';

import AppRightCornerRibbon from 'components/app-right-corner-ribbon';

import './index.scss';

function ViewCodeRibbon() {
  return (
    <AppRightCornerRibbon color={AppRightCornerRibbon.Color.Red}>
      <a
        className="view-code-link"
        href="https://github.com/ann40a/about-me"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Code on GitHub
      </a>
    </AppRightCornerRibbon>
  );
}

export default ViewCodeRibbon;
