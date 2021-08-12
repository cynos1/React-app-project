import React from 'react';
import PropTypes from 'prop-types';
// import Image from '../Image/Image';
import './card.css';

const Card = ({data,title,year,array1prop,object1prop, classname, color,poster,alt,width,height})=> {
    // let images = data && data.map(x =>{
        return (
            <div style={{backgroundColor:color}} className={`${classname} card-color`}>
                <h5>{title}</h5>
                <p>{year}</p>
                <img  src={poster} 
                alt={alt} 
                width={width}
                height={height}></img><br/>
                {/* <Image
                poster ={x.poster}
                alt = {x.title}
                width = "200px"
                height = "200px"
                /> */}
                
            </div>
        )
//    })
   return (
        <div className="card-cover">
            {/* {images} */}
        </div>
    );

};
Card.defaultProps = {
    width: 200,
    height:200
}
Card.propTypes = {
    title: PropTypes.string,
    year: PropTypes.string,
    poster: PropTypes.string,
    array1prop : PropTypes.array,
    object1prop: PropTypes.object
}
export default Card;