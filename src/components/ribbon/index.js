import React from 'react';

import './index.scss';

const Color = {
  Red: 'red',
  Black: 'black',
};

function Ribbon({ color, children }) {
  return (
    <div className={`ribbon-${color}`}>
      <div className="stitches">
        {children}
      </div>
    </div>
  );
}

Ribbon.Color = Color;

export default Ribbon;
