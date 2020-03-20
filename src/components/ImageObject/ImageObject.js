import React from 'react'


const ImageObject = ({ image, classN, altText }) => {
    return (
        <div className="image-container">
            <img src={require(`../../assets/${image}`)} className={classN} alt={altText} />
        </div>
    )
}

export default ImageObject;