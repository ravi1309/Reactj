import React from 'react';
import './ProjectGallery.css'; // import your CSS file

function ProjectGallery() {
  return (
    <div className="project-gallery-container">
      <h2 className="project-gallery-title">Project Gallery</h2>
      <div className="project-gallery">
        <img className="project-gallery-image" src="path/to/image1" alt="Project Image 1" />
        <img className="project-gallery-image" src="path/to/image2" alt="Project Image 2" />
        <img className="project-gallery-image" src="path/to/image3" alt="Project Image 3" />
        <img className="project-gallery-image" src="path/to/image4" alt="Project Image 4" />
        <img className="project-gallery-image" src="path/to/image5" alt="Project Image 5" />
      </div>
    </div>
  );
}

export default ProjectGallery;
