import React from 'react'
import imagesData from '../data/images';
import ImageLoader from './ImageLoader';

function ImageGrid() {
    return (
        <div className="container container-lg mx-auto mb-16">
            <div className="columns-3 mx-auto gap-8">
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
