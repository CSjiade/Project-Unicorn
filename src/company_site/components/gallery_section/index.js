import React, { useState } from 'react';
import GalleryStyles from './gallery_style';
import galleryData from './gallery_data';
import GalleryModal from './gallery_modal';
import { Typography } from '@material-ui/core';
import GalleryButtons from './gallery_buttons';
import Grid from '@material-ui/core/Grid';


const GallerySection = () => {
  const galleryClasses = GalleryStyles();
  const [openModal, toggleOpenModal] = useState(false);
  const [selectedGallery, setSelectedGallery] = useState();
  const [selectedSlide, setSelectedSlide] = useState();
  const modalHandler = (event) => {
    toggleOpenModal(!openModal);
  };

  const onCardClick = (index) => {
    setSelectedGallery(galleryData[index].gallery);
    setSelectedSlide(galleryData[index].gallery[0]);
    modalHandler();
  };

  const onGalleryItemClick = (slide) => {
    setSelectedSlide(slide);
  };

  return (
    <div id="gallery" className={galleryClasses.galleryContainer}>
      <GalleryModal
        openModal={openModal}
        modalHandler={modalHandler}
        gallery={selectedGallery}
        selectedSlide={selectedSlide}
        onGalleryItemClick={onGalleryItemClick}
      />
      <Typography className={galleryClasses.sectionHeader} variant="h4" component="h4">
        Our Values
      </Typography>
      <div className={galleryClasses.buttonContainer}>
        <GalleryButtons onCardClick={onCardClick}/>
      </div>
    </div>
  );
};

export default GallerySection;
