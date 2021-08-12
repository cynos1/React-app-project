import React from 'react';
import Card from '../Card/Card';
import './ListMovies.css';

const ListMovies =({data, nominated, setNominated}) => {
    function handleAddNomination(imdbId){
       
            if(nominated.length >= 5){
               return alert('Only 5 nominations allowed')
            }
            let copynomination = [...nominated]
            if (!copynomination.includes(imdbId)){
                copynomination.push(imdbId)
                
            }
            setNominated(copynomination)
    }
    let movies = data && data.map(x =>{
        return (
            <div key={x.imdbId} >
                <Card
                title = {x.Title}
                year = {x.Year}
                poster = {x.Poster}
                alt = {x.Title} 
                array1prop ={[3,4]}
                object1prop ={{name:"ada"}}
                classname = "bgcolor"
                color = "green"
                />
                <button disabled={nominated.includes(x.imdbId)} 
                onClick={()=>handleAddNomination(x.imdbId)}>
                    nominate</button>
                            
            </div>
        )
    })
    return (
        <div className="styling">
            {movies}
            </div>
    );
};


export default ListMovies;