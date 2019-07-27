import React from 'react';

import './index.scss';

const Rotation = {
  TopRight: 45,
};

function WithChildrenRotation({ rotation = Rotation.TopRight, children }) {
  return (
    <div className={`with-children-rotation-${rotation}deg`}>
      <div className="rotation-area-size-container">
        <div className="rotatable-container">
          <div className="rotatable-element">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

WithChildrenRotation.Rotation = Rotation;

export default WithChildrenRotation;
