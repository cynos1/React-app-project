import React from 'react';
import Card from '../Card/Card';

const Nominations = ({data, nominated, setNominated}) => {
    function handleRemoveNomination (imdbID) {
        let copyNominated= [...nominated]
        let idx= copyNominated.indexOf(imdbID)
        copyNominated.splice(idx,1)

        setNominated(copyNominated)
    }
    let nominatedmovies =  data && data.filter((i)=>
        nominated.includes(i.imdbID)
  ).map(x =>{
        return(
            <div key={x.imdbID} >
                <Card
                title = {x.Title}
                year = {parseInt(x.Year)}
                poster = {x.Poster}
                alt = {x.Title} 
                array1prop ={[3,4]}
                object1prop ={{name:"ada"}}
                classname = "bgcolor"
                color = "red"
                />
                <button disabled ={!nominated.includes(x.imdbID)}
                onClick={()=>handleRemoveNomination(x.imdbID)}>Remove nomination</button>
                </div>
        )
    })
    return(
        <div className="styling2">
            <h3>{nominatedmovies}</h3>
        </div>
    )
   
};

export default Nominations