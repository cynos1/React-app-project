import React from 'react'
// import PropTypes from 'prop-types';

const NewEntry = ({setEmployer, setUniversityName}) =>{
        return (
        <div>
           <form>
            <label>Enter University Name:</label><br/>
          <input type="text" onChange={e=>setUniversityName(e.target.value)}></input>
          <br/>
          <label>Enter Employer:</label><br/>
          <input type="text" onChange={e => setEmployer(e.target.value)}></input><br/>
          </form> 
        </div>
    );
}
    NewEntry.propTypes = {

    };

export default NewEntry;
