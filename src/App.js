import React from 'react';

import MySpeeches from './features/my-speeches';
import ViewCodeRibbon from './features/view-code-ribbon';
import AppVersionRibbon from './features/app-version-ribbon';

function App() {
  return (
    <>
      <AppVersionRibbon />
      <ViewCodeRibbon />

      <h1>About Me</h1>
      <h2>Anna Sorokina, Full Stack Web Developer</h2>

      <MySpeeches />
    </>
  );
}

export default App;
