import React, {useState} from 'react'

function Practice0() {
    const [names,setNames] = useState({firstname: "", lastname: ""})
    function handleInput(){
        setNames(names)
    }





    return (
        <div>
            <form>
          <label>Enter your names</label> <br/> 
          <input type="text" value = {names.firstname} onChange={e => setNames({...names, firstname: e.target.value})}></input>
          <input type="text" value = {names.lastname} onChange={e => setNames({...names, lastname: e.target.value})}></input>
          {/* <h2>first name : {names.firstname}</h2>
          <h2>last name: {names.lastname}</h2> */}
          {/* <h2>{JSON.stringify(names)}</h2> */}
          <button onClick= {() => handleInput()}>Submit</button><br/>
          {names.firstname}<br/>
          {names.lastname}
          </form>

        </div>
    )
}

export default Practice0
