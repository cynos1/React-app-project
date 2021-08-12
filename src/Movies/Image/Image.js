import React from 'react';
import './image.css';

const Image = ({poster, alt, width, height}) => {
    return(
        <div  >
            <img  src={poster} 
                alt={alt} 
                width={width}
                height={height}></img>
            
        </div>
    )
};

export default Image;