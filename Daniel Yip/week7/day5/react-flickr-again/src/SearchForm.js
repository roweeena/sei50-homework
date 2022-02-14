import react from "react";

function SearchForm(props) {

  return(
    <form is="search-form" onSubmit={(e)=> props.handleSubmit(e)}>
      <input type="text" value={props.value} onChange={(e)=>props.handleChange(e)}/>
      <button>Search</button>
    </form>
  )

}


export default SearchForm