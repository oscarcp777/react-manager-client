import React from 'react';
import ImageGallery from 'react-image-gallery';

const images = [
    {
        original: 'img/slices/slice-3.jpg',
        thumbnail: ''
    }, {
        original: 'img/slices/slice-2.jpg',
        thumbnail: ''
    }, {
        original: 'img/slices/slice-1.jpg',
        thumbnail: ''
    }
]
const handleImageLoad = (event) => {
    // console.log('Image loaded ', event.target)
}
const Carousel = (props) => (<ImageGallery showBullets={true} autoPlay={true} slideInterval={4000} showFullscreenButton={false} showPlayButton={false} showThumbnails={false} showIndex={false} showNav={false} items={images} onImageLoad={handleImageLoad}/>)

export default Carousel
