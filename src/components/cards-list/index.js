import React from 'react';

import './index.scss';

function CardsList({ children }) {
  return (
    <div className="cards-list">
      {children}
    </div>
  );
}

export default CardsList;
