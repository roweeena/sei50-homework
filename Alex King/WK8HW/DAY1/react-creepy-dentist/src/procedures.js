
// import React from 'react'
import ProcedureSearchForm from './ProcedureSearchForm'

const Procedures = (props) => {

    return(
        <div>
            <h2>Procedures</h2>
            <p>
                Learn more about out extensive procedures here!
            </p>
            <p>
                Why not start with a <strong>Root Canal</strong>
            </p>

            <ProcedureSearchForm history={props.history}/>


        </div>
    )

}

export default Procedures;