import React from 'react';

const procedureList = [
    {
      id: 1,
      name: 'Extraction',
      description: 'Yank out that bad boy! Who needs it!',
      cost: 1000
    },
    {
      id: 2,
      name: 'Root Canal',
      description: 'Long, painful, intense. For lovers of extreme dentistry only.',
      cost: 10000
    },
    {
      id: 3,
      name: 'Jaw Extraction',
      description: 'Lose that heavy baggage! Fluids only from now on!',
      cost: -1000
    },
    {
      id: 4,
      name: 'Wallet Extraction',
      description: 'I am taking it all.',
      cost: Infinity
    }
];


class ProcedureSearchResults extends React.Component {

    state = {
        searchResults: []
    }

    // like the document ready of react 
    // this is called a lifecycle method
    componentDidMount(){
        console.log('componentDidMount()');
        const query = this.props.match.params.query.toLowerCase();
        // let filteredArr = [];
        // procedureList.forEach((e)=>{
        //     if (e.name.toLowerCase().includes(query) || e.description.toLowerCase().includes(query)){
        //         filteredArr.push(e)
        //     };
        // });
        const filteredArr = procedureList.filter( res => {
            return res.name.toLowerCase().includes(query) || res.description.toLowerCase().includes(query)})
        this.setState({searchResults:filteredArr})
    };
    
    componentWillUnmount(){
        console.log('componentWillUnmount()');
    }
    
    render() {

        // axios shouldn't go in render
        // you don't want to keep making requests
        // every single time your state changes
        // if your API request is saved into state
        // there will be an infinite loop

        const {query} = this.props.match.params // {} object destructuring. this is saying that we are gabbing 'query' from this.props.match.params. can do other variables within the {} ie const {name, age, location} = ...
        return (
            <div>
                <h3>Search results for: {query}</h3>
                <ul>
                    {
                    this.state.searchResults.map(res => (
                    <li> 
                        {res.name}:<br/>
                        {res.description} <br/>
                        fee: ${res.cost}
                    </li>)
                    )}
                </ul>
            {/* do a map of filtered */}
            </div>
        );
    }
}

export default ProcedureSearchResults;
