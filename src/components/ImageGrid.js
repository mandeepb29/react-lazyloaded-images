import React from 'react'
import imagesData from '../data/images';
import ImageLoader from './ImageLoader';

function ImageGrid() {
    return (
        <div className="container container-lg md:container-md sm:container-sm mx-auto mb-16 px-8">
            <div className="lg:columns-3 sm:columns-2 columns-1 mx-auto gap-8">
                {
                    imagesData.map((imgItem,index) =>
                        <div className='relative h-auto w-full'  key={`image-${index}`}>
                            <ImageLoader
                                src={imgItem.src}
                                placeholder={imgItem.placeholder}
                                alt="image"
                            />
                        </div>)
                }
            </div>
        </div>
    )
}

export default ImageGrid
