import React from 'react';
import './App.css'; // import your CSS file

import ProjectImage from './components/ProjectImage';
import ProjectDescription from './components/ProjectDescription';
import MemberTable from './components/MemberTable';
import ProjectGallery from './components/ProjectGallery';

function App() {
  return (
    <div className="App">
      <ProjectImage />
      <ProjectDescription />
      <MemberTable />
      <ProjectGallery />
    </div>
  );
}

export default App;
