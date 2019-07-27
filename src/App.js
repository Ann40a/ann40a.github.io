import React from 'react';

import ViewCodeRibbon from './features/view-code-ribbon';
import AppVersionRibbon from './features/app-version-ribbon';

function App() {
  return (
    <>
      <ViewCodeRibbon />
      <AppVersionRibbon />

      <h1>About Me</h1>
      <h2>Anna Sorokina, Full stack web developer</h2>
    </>
  );
}

export default App;
