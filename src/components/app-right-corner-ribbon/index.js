import React from 'react';

import Ribbon from 'components/ribbon';
import WithChildrenRotation from 'components/with-children-rotation';

import './index.scss';

function AppRightCornerRibbon({ children, ...passesProps }) {
  return (
    <div className="app-right-corner-ribbon">
      <WithChildrenRotation rotation={WithChildrenRotation.Rotation.TopRight}>
        <Ribbon {...passesProps}>
          <div className="content">
            {children}
          </div>
        </Ribbon>
      </WithChildrenRotation>
    </div>
  );
}

AppRightCornerRibbon.Color = Ribbon.Color;

export default AppRightCornerRibbon;
