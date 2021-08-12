// import React  from 'react';
import React, { useState } from 'react';
const ImageDetailer = (props) =>{
    console.log('IMAGE DETAILER RENDERED')
    console.log(props, 'PROPS');
    const [shouldDisplayName, setShouldDisplayName] = useState(true) //state
    const[displayLength, setDisplayLength] = useState(false) //state
    const[increment, setIncrement] = useState(0)
    const[number, setNumber] = useState(0)
    
    function prac(){
        let namesh = props.myinfo.name.length;
        return namesh;
    }
    

   
    return (
        <div>
            <h3>{increment}</h3>
         { shouldDisplayName ? <p>{`My name is ${props.myinfo.name + " "+ props.myinfo.lastname}`}</p>: true}

        {displayLength ? prac(): null}  
        {/* if displayLength is true, execute the function */}

         <button onClick ={()=>setShouldDisplayName(false)}>make name disapear</button>
         <button onClick ={()=>setDisplayLength(!displayLength)}  >total length of first name and last name</button>
         <button onClick ={()=>setIncrement(increment + 1)}>+</button>
         <button onClick ={()=>setIncrement(increment - 1)} >-</button>
         <input onChange= {(e)=>setNumber(parseInt(e.target.value))}></input>
         <button onClick ={()=>setIncrement(number + increment)} >increment by {number}</button>
        </div>
        
    );
};
export default ImageDetailer;