import React, { useState, useEffect } from 'react';
// import ImageDetailer from './imageDetailer.jsx';
import Card from './Card.jsx';
import './App.css';
// import importedData from './Student_Data.json'
import { v4 as uuidv4 } from 'uuid';
// import Practice0 from './Practice0.jsx';
import NewEntry from './NewEntry.jsx';
import axios from 'axios'
import questions from './question.json'
// import QuizApp from './QuizApp.jsx';
import CircularProgress from '@material-ui/core/CircularProgress';
import Movies from './Movies/Index'
// import Converter from './Converter.jsx';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  
} from "react-router-dom";
import { yellow } from '@material-ui/core/colors';


 
function App() {

const [data, setData] = useState([])
const [favs, setFavs] = useState([])
const [recentlyDeleted, setRecentlyDeleted] = useState([])
const [universityname, setUniversityName] = useState("")
const [employer, setEmployer] = useState("")
const [isLoading, setIsLoading] = useState(true)
const [posts, setPosts] = useState([])
const [isPostsLoading, setIsPostsLoading] = useState(true)
const [searchInput, setSearchInput] = useState("")
const [isSearchEnabled,setIsSearchEnabled] =useState(false)
const [currentPage, setCurrentPage] = useState(1)
const[val, setVal] = useState(0)

    // function conversion(val){
    //     return (val * 1000)
    // }



useEffect(()=>{
  setIsLoading(true)
  axios.get("http://localhost:4000/getallentries")
  .then(resp => {
    setIsLoading(false)
    setData(resp.data)

  })// displays data to the screen from backend
  
  .catch(e =>{ setIsLoading(false)
  })

},[])



useEffect(()=>{
  setIsPostsLoading(true)
  axios.get("http://localhost:4000/getposts")
  .then(resp => {
    // console.log(resp, 'resp')
    setIsPostsLoading(false)
    setPosts(resp.data)

  })// displays data to the screen from backend
  
   .catch(e =>{ setIsPostsLoading(false)
  })
},[])

// useEffect(() => {
//    console.log('COMPONENT DID MOUNT')
//   let newData =[...importedData]
//   newData= newData.map(x=>{
//     return {...x,id:uuidv4()}
//   })
//   setData(newData)

// console.log(favs, 'XXXFAVS');
// }, [])


// let newData = [...data]
// newData = newData.map(x => {
//   return{...x}
// })

// function saveFavorites(employer){
//   let copyFavs = [...favs]
//   if(!copyFavs.includes(employer)){
//     copyFavs.push(employer)
//     setFavs(copyFavs)
//   }
  
// }

// function handleUnfavorite(employer){
//   const removed = favs.filter(x => x !== employer)
//   setFavs(removed)
// }
// function handledisable(employer){
//   if(favs.includes(employer)){
//     return true
//   }

// }
// function handleDelete(id){
//   const deleted = data.filter(x => x.id !== id)
//   setData(deleted)

//   const showDeleted = data.filter(x => x.id === id)
//   setData(deleted)
//   setRecentlyDeleted(recentlyDeleted.concat(showDeleted))


// }
// function addNewRecord(){
//   let newObj = {
//     University_Name : universityname,
//     Employer : employer

//   }
//   const sentData = [newObj, ...data]
//   setData(sentData)

  
  
// }
// function searchme(){
//   setIsSearchEnabled(true)
// //   let copydata = [...data]
// //   let filtereddata = copydata.filter((x)=>{
// //     if(x.Employer.toLowerCase().includes(searchInput.toLowerCase()) ||
// //     x.Job_Title.toLowerCase().includes(searchInput.toLowerCase())){
// //     return true
// //  }
// //   })
// //   setData(filtereddata)
// }
// function clearme(){
//   setSearchInput("")
// }
// function runfilters(){
//   let copydata = [...data]
//   copydata = copydata.filter((x)=>{
//     if(x.Employer.toLowerCase().includes(searchInput.toLowerCase())||
//     (x.Job_Title.toLowerCase().includes(searchInput.toLowerCase()))
//     ){
//       return true
//     }
//   })
//   return copydata
// }
// function calculatepages(){
//   const len = data.length
//   const entriesperpage = 10
//   const pages = len < entriesperpage ? 1 : Math.ceil(len / entriesperpage);
//   let finalpages = []
//   for(let i = 1; i <= pages; i++){
//     finalpages.push(i)
//   }
//   console.log(finalpages)
//   return finalpages
// }



// let names = data.slice(((currentPage-1)*10)+1,((currentPage-1)*10)+11)
//   .map((x)=>{
//   const {Employer, University_Name, id} = x
//   return (
//     <div className="split container" key={x.id}>
//       <Card
//       employer = {Employer}
//       UniversityName = {University_Name}
//       jobtitle = {x.Job_Title}
//       />
//       <button disabled ={handledisable(Employer)} onClick={()=> saveFavorites(Employer)}>favorite</button>
//       <button disabled ={!handledisable(Employer)} onClick={()=>handleUnfavorite(Employer)}>unfavorite</button>
//       <button onClick={()=>handleDelete(x.id)}>delete</button>
//     </div>
//   )
// })

// let names1 = posts.map((x)=>{
//  const {title} = x
//   return (
//     <div className="split container1" key={x.id}>
//       <p>{title}</p>
      
//     </div>
//   )

// //give 50% screen to posts and data
// })


  


if(isLoading || isPostsLoading){
  return <CircularProgress />;
}

  return (
    <div className="App">
    <Router>
      <div>
        <nav>
        <ul style={{display: "flex", justifyContent:"space-around"}}>
          <li>
            <Link style={{textDecoration:"none", color:"white", fontSize:"20px"}} to="/" exact>Home</Link>
          </li>
          <li>
            <Link style={{textDecoration:"none",color:"white", fontSize:"20px"}} to="/newentry">Create New Entry</Link>
          </li>
          {/* <li>
            <Link to="/quizapp">Quiz App</Link>
          </li> */}
          <li>
            <Link style={{textDecoration:"none", color:"white", fontSize:"20px"}} to ="/movies" exact>Movies</Link>
          </li>
          {/* <li>
            <Link to ="/converter" exact>Converter</Link>
          </li> */}
        </ul>
          </nav>
          <hr/>
        <Switch>
          
          <Route path="/newentry" >
            <NewEntry 
            setUniversityName = {setUniversityName} 
            setEmployer = {setEmployer}
            />
          </Route>
          {/* <Route  path = "/quizapp">
            <QuizApp/>
          </Route> */}
          {/* <Route path="/converter">
            <Converter
            setval = {setVal}
            />
          </Route> */}
          <Route  path="/movies">
            <Movies/>
          </Route>
          
          
          
        </Switch>
          {/* <label>Search bar: </label><br/>
            <input type="text" value = {searchInput} onChange={(e)=>setSearchInput(e.target.value)}></input><br/>
            <button  onClick={(e)=>(searchme(e))}>Search</button><br/>
            <button  onClick={(e)=>(clearme(e))}>Clear</button><br/>
          <button  onClick={()=>addNewRecord()}>add new record</button><br/>
          {`your current favorite are: ${favs.join(",")}`} <br/>
          {`your recently deleted is:  ${recentlyDeleted.map(x => x.Employer).join(",")}`}
          
          
        <div>
          {calculatepages().map((x, idx)=>{
            console.log(`page number is ${x}`);
            console.log(`index is ${idx}`);
                return(
                  <span onClick={() => setCurrentPage(x)}>{x}{" "}</span>
                )
          })}
          </div>
          {names} 
          {names1}*/}

          {/* <input 
            value={val} 
            onChange={(e)=> setVal(e.target.value)} /><br/>
            <p>{val} kg equals {conversion(val)} grams</p> */}
      </div> 
    </Router>
 </div>


  ); 
}

export default App;
