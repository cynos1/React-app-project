import React from 'react';
import './Hero.css'

const Hero =({searchString, setSearchString, placeholder}) => {
    // function debounce(func, timeout = 300){
    //     let timer;
    //     return (...args) => {
    //       clearTimeout(timer);
    //       timer = setTimeout(() => { func.apply(this, args); }, timeout);
    //     };
    // }
    
    return (
        <div className="design">
          <input type="text" 
          onChange={(e)=>setSearchString(e.target.value)} 
          value={searchString} 
          placeholder={placeholder}
        //   onKeyup = {handleDebounce}
          />
        </div>
    );
};


export default Hero;