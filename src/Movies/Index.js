

import React, {useState, useEffect} from 'react';
import Hero from './Hero/Hero'
import axios from 'axios'
import ListMovies from './ListMovies/ListMovies';
import Nominations from './Nominations/Nominations';

const Index = props => {
    const [searchString, setSearchString] = useState("")
    const [data, setData] = useState([])
    const [nominated, setNominated] = useState([])

    useEffect(()=>{
        axios.get(`http://www.omdbapi.com/?i=tt3896198&apikey=7d8d3714&s=${searchString}`)
        .then(resp => setData(resp.data.Search))
    // displays data to the screen from backend
        .catch(e =>{ console.log(e)
        })
      },[searchString])

    return (
        <div className="designmoviesearch">
            {/* <td style={{borderLeft:"5px solid yellow", padding:"845px", right:"-1100px", position:"fixed", top:"140px"}}></td> */}
            <Hero
            searchString={searchString}
            setSearchString = {setSearchString}
            placeholder="Enter your movie search"
            />
            <div className="split left">
                 <ListMovies
                 data = {data}
                 nominated = {nominated}
                 setNominated = {setNominated}
                 /> 
               
      
            </div>
            
            <div className="split right">
            <Nominations
            data = {data}
            nominated = {nominated}
            setNominated = {setNominated}
            /> 
            </div>
            
        </div>
    );
};


export default Index;