import React from 'react'
class AddRecord extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            employer: '',
            universityname: ''

        }
    }
    handleInput = (event) => {
        const name = event.target.name
        const newState = {}
        newState[name] = event.target.value
        this.setState(newState)
        event.preventDefault()
    }
    render(){
        return (
            <div>
                <form>
                    <input type="text" name="employer" placeholder="Employer" value={this.state.employer} onChange={this.handleInput}/>
                    <input type="text" name="universityname" placeholder="University Name" value={this.state.universityname} onChange={this.handleInput}/>
                    <button type="submit">Add Record</button>

                </form>
            </div>
        )
    }
}
export default AddRecord