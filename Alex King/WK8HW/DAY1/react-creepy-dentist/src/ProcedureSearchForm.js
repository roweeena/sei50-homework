import React from 'react';

class ProcedureSearchForm extends React.Component {

    state ={
        queryText: ''
    }

    handleInput = (e) => {
        console.log('handInput()', e.target.value)
        this.setState({queryText: e.target.value})
    }; // handleInput

    handleSubmit = (e) =>{
        e.preventDefault();
        console.log('handleSubmit()');

        this.props.history.push(`/procedures/search/${this.state.queryText}`)

    }

    render() {
        return (
            <div>
                <h4>Search for a Procedure: {this.state.queryText}</h4>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" onChange={this.handleInput}/>
                    <button>Search</button>    
                </form>                
            </div>
        );
    }
}

export default ProcedureSearchForm;
