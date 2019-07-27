import React from 'react';

import AppRightCornerRibbon from 'components/app-right-corner-ribbon';

function AppVersionRibbon() {
  return (
    <AppRightCornerRibbon color={AppRightCornerRibbon.Color.Black}>
      <span className="app-version">
        WIP v0.1.0
      </span>
    </AppRightCornerRibbon>
  );
}

export default AppVersionRibbon;
