import React, { useState } from 'react'
import './GalleryPhotos.css'
import photos from '../../assets/photos'
import previcon from '../../assets/prev-icon.png'
import nexticon from '../../assets/next-icon.png'

const GalleryPhotos = ({hideGallery, setHideGallery}) => {
    const [activePhoto, setActivePhoto] = useState(1)
    const [hideNextButon, setHideNextButon] = useState(false)
    const [hidePrevButon, setHidePrevButon] = useState(true)

    const handlePrevClick = () => {
        if (activePhoto > 1) {
            setActivePhoto((prev)=> prev -1)
            setHideNextButon(false)
        }
        if (activePhoto <= 2) {
            setHidePrevButon(true)
        }    
    }
    const handleNextClick = () => {
        if (activePhoto <= photos.length - 1) {
            setActivePhoto((prev) => prev + 1)
            setHidePrevButon(false)
        }
        if (activePhoto === photos.length -1) {
            setHideNextButon(true)
        }
    }
  return (
    <div className={`gallery-photos ${hideGallery ? 'hide' : ''} `}>
        {photos && photos.map((item)=>(
              <div key={item.id} className={`photo ${item.id === activePhoto ? 'active' : ''}`}>
              <img src={item.photo} alt=''/>
          </div>
        ))}
       
        <div className={`prev ${hidePrevButon ? 'hide' : ''}`} onClick={handlePrevClick} >
        <img src={previcon} alt=''/>
        </div>
        <div className={`next ${hideNextButon ? 'hide' : ''}`} onClick={handleNextClick}>
        <img src={nexticon} alt=''/>
        </div>
        <span className="close-gallery" onClick={()=> setHideGallery(true)}>
            &times;
        </span>
    </div>
  )
}

export default GalleryPhotos