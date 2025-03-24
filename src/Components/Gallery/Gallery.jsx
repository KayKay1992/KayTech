import React from 'react';
import './Gallery.css';
import Title from '../Title/Title';
import gallery5 from '../../assets/gallery-5.jpg';
import gallery1 from '../../assets/gallery-1.jpg';
import gallery4 from '../../assets/gallery-4.jpg';
import gallery2 from '../../assets/gallery-2.jpg';

function Gallery({ setHideGallery }) {
  return (
    <div className='gallery wrapper' id="gallery">
      <Title title='Campus Memorie' titleText="Explore the Collections of our student pictures in Campus" />
      <div className="galleries">
        <div className="item">
          <img src={gallery5} alt="Image 1" />
        </div>
        <div className="item">
          <img src={gallery4} alt="Image 2" />
        </div>
        <div className="item">
          <img src={gallery2} alt="Image 3" />
        </div>
        <div className="item">
          <img src={gallery1} alt="Image 4" />
        </div>
      </div>
      <button className="btn" onClick={() => setHideGallery(false)}>
        <span>More Photos</span>
      </button>
    </div>
  );
}

export default Gallery;
